import { NextFunction, Response } from "express";
import { DecodedData, UserRequest } from "../interfaces/interfaces"
import path from 'path'
import dotenv from 'dotenv'
dotenv.config({path:path.resolve(__dirname, '../../.env')})
import jwt from 'jsonwebtoken'


export const verifyUser =(req:UserRequest, res:Response, next:NextFunction)=>{
    try {
        const token = req.headers['token'] as string

        if(!token){
            return res.status(401).json({message:'Not Authorized'})
        } 

        const dedodedData = jwt.verify(token, process.env.SECRET_KEY as string) as DecodedData
        req.data=dedodedData
        
    } catch (error:any) {
        return res.status(403).json({message:error.message})
    }
    next()
}