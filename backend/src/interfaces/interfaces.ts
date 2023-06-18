import { Request } from "express"

export interface Todo{
    id:number
    title:string
    description:string
}

export interface User{
    userId:string
    username:string
    email:string
    role:string
    password:string

} 

export interface ExtendedRequest extends Request{
    body:{
        username:string
        email:string
        role:string
        password:string
    }
    params:{
        userId:string
    }
}