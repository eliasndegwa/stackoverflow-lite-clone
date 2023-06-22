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
    userId:string
    questionHeading:string
    questionDescription:string
    tags:[
        {tagId:string,tagName:string}
    ]
}

export interface QuestionRequest extends Request{
    data?:DecodedData
    body:{
        title:string
        body:string
        tags:[
            {tagId:string,tagName:string}
        ]
    }
    params:{
        questionId:string
    }
}

export interface Tag{
    tagId:string
    tagName:string
}