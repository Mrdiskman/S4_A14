export interface IUserRequest {
    name: string
    email: string
    password: string
    isAdm: boolean
}

export interface IUser {
    id: string
    name: string
    email: string
    isAdm: boolean
    createdAt: Date
    updatedAt: Date
}


export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    name?: string
    email?: string
    password?: string
    id?: string
    isAdm?: boolean
    isActive?: boolean
}

export interface IUpdateToken {
    email: string
    isAdm: boolean
    isActive: boolean
    id: string
    iat: number
    exp: number
}