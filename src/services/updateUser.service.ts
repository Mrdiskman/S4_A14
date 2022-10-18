import AppDataSource from "../data-source"
import { User } from "../entities/user.entity"
import {IUserUpdate} from "../interfaces/users"
import {hash} from "bcrypt"

const updateUserService = async(id:string, newData:IUserUpdate) =>{
  const usersRepository = AppDataSource.getRepository(User)
  const user = await usersRepository.findOneBy({id})
  if(newData.isAdm !== undefined){
    throw new Error("Invalid input")
  }

  if(newData.isActive !== undefined){
    throw new Error("Invalid input")
  }

  if(newData.id !== undefined){
    throw new Error("Invalid input")
  }

  if(!user){
    throw new Error("User not found")
  }

  if(!newData.name&&!newData.email&&!newData.password){
    return user
  }

  if(newData.password){
    newData.password = await hash(newData.password, 10)
  }

  await usersRepository.update(id, {...newData})
  return user
}

export default updateUserService