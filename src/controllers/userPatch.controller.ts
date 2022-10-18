import { Request, Response } from "express";
import updateUserService from "../services/updateUser.service";

const updatedUserController = async (req:Request, res:Response) => {
  try{
    const {id} = req.params
    const newData = req.body
    const updateUser = await updateUserService(id, newData)
    return res.json({
      message: "User updated", ...updateUser
    })
  }
  catch(err){
    if(err instanceof Error){
      return res.status(401).send({
        error: err.name,
        message: err.message
      })
        }
      }
}

export default updatedUserController