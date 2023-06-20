import { Request } from "express"

export interface User{
    userId:string
    username:string
    email:string
    role:string
    password:string

} 
export interface DecodedData{
    userId:string
    username:string
    email:string
}

export interface UserRequest extends Request{
    data?:DecodedData
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

export interface Question{
    questionId:string
    questionHeading:string
    questionDescription:string
}

export interface QuestionRequest extends Request{
    body:{
        title:string
        body:string
    }
    params:{
        questionId:string
    }
}