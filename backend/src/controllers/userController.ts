import {Request, RequestHandler, Response} from "express";
import mssql from 'mssql'
import path from 'path'
import {sqlConfig} from "../config"
import {v4 as uid} from "uuid"
import bcrypt from 'bcrypt'
// import dotenv from 'dotenv'
// import jwt from 'jsonwebtoken'
import { ExtendedRequest, User } from "../interfaces/interfaces";
// dotenv.config({path:path.resolve(__dirname, '../../.env')})

export const createUser= async(req:ExtendedRequest,res:Response)=>{
    try {
        let userId=uid()
        const{username,email,role,password}=req.body
        let hashedPassword= await bcrypt.hash(password,7)
        const pool= await mssql.connect(sqlConfig)
        await pool.request()
        .input('userId',mssql.VarChar,userId)
        .input('username',mssql.VarChar,username)
        .input('email',mssql.VarChar,email)
        .input('password',mssql.VarChar,hashedPassword)
        .execute('insertUser')

        return res.status(201).json({message:'User Registered successfully'})
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}

export const getAllUsers:RequestHandler=async (req, res) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        let users: User[] = (await (await pool.request()).execute('getusers')).recordset;
        return res.status(200).json(users);
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
}

export const getUserByEmail:RequestHandler<{email:string}>=async (req, res)=>{
    try {
        const {email} = req.params
        const pool = await mssql.connect(sqlConfig)
        let user:User[] = (await (await pool.request())
        .input('email',email)
        .execute('getUserByEmail')).recordset[0]
        if(user){
            return res.status(200).json(user)            
        }
        return res.status(404).json({message:"User not found"})
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}

export const getUserById:RequestHandler<{userId:string}>=async (req, res)=>{
    try {
        const {userId} = req.params
        const pool=await mssql.connect(sqlConfig)
        let user:User[] = (await (await pool.request())
        .input('userId',userId)
        .execute('getUserById')).recordset[0]

        if(user){
            return res.status(200).json(user)            
        }
        return res.status(404).json({message:"User not found"})
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}

export const updateUser=async(req:ExtendedRequest,res:Response)=>{
    try {
        const {username,email}=req.body
        const {userId}=req.params
        const pool=await mssql.connect(sqlConfig)
        let user:User[] = (await (await pool.request())
        .input('userId',userId)
        .execute('getUserById')).recordset[0]

        if (user) {
            await pool.request()
            .input('userId',userId)
            .input('username',username)
            .input('email',email)
            .execute('updateUser')
            return res.status(200).json({message:"User updated successfully"})
        }else{
            return res.status(404).json({message:"User not found"})
        }
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}

export const deleteUser=async(req:ExtendedRequest,res:Response)=>{
    try {
        const {userId} =req.params
        const pool= await mssql.connect(sqlConfig)
        let user:User[] = (await (await pool.request())
        .input('userId',userId)
        .execute('getUserById')).recordset[0]
        if(user){
            await pool.request()
            .input('userId',userId)
            .execute('deleteUser')            
            return res.status(200).json({message:"User deleted successfully!"})
        }else{
            return res.status(404).json({message:"User not found!"})
        }        
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}