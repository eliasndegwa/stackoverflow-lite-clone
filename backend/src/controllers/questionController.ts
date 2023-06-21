import mssql from 'mssql'
import {Request, RequestHandler, Response} from "express";
import {sqlConfig} from "../config"
import {v4 as uid} from "uuid"
import { QuestionRequest, Question, Tag } from "../interfaces/interfaces";

export const getAllQuestions:RequestHandler=async (req, res) => {
    try {
        const pool = await mssql.connect(sqlConfig);
        let questions: Question[] = (await (await pool.request()).execute('getQuestions')).recordset;
        return res.status(200).json(questions);
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
}

export const postQuestion=async(req:QuestionRequest,res:Response)=>{
    try {
        const questionId=uid()
        const {title,body,tags}=req.body
        const pool=mssql.connect(sqlConfig)        
        await (await pool).request()
        .input('questionId',questionId)
        .input('title',title)
        .input('body',body)
        .input('userId',req.data?.userId[0])
        .execute('postQuestion')

        const updatedTags = tags.map((tag) => {
            tag.tagId = uid();
            return tag
        });
        
        return res.status(200).json({message:"Question added successfully!"})
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}

export const getQuestionById:RequestHandler<{questionId:string}>=async (req, res)=>{
    try {
        const {questionId} = req.params
        const pool=await mssql.connect(sqlConfig)
        let question:Question[] = (await (await pool.request())
        .input('questionId',questionId)
        .execute('getQuestionById')).recordset[0]

        if(question){
            return res.status(200).json(question)            
        }
        return res.status(404).json({message:"Question not found"})
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}

export const updateQuestion=async(req:QuestionRequest,res:Response)=>{
    try {
        const {title,body}=req.body
        const {questionId}=req.params
        const pool=await mssql.connect(sqlConfig)
        let question:Question[] = (await (await pool.request())
        .input('questionId',questionId)
        .execute('getQuestionById')).recordset[0]

        if (question) {
            await pool.request()
            .input('questionId',questionId)
            .input('title',title)
            .input('body',body)
            .execute('updateQuestion')
            return res.status(200).json({message:"question updated successfully"})
        }else{
            return res.status(404).json({message:"question not found"})
        }
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}

export const deleteQuestion=async(req:QuestionRequest,res:Response)=>{
    try {
        const {questionId} =req.params
        const pool= await mssql.connect(sqlConfig)
        let question:Question[] = (await (await pool.request())
        .input('questionId',questionId)
        .execute('getQuestionById')).recordset[0]
        if(question){
            await pool.request()
            .input('questionId',questionId)
            .execute('deleteQuestion')            
            return res.status(200).json({message:"question deleted successfully!"})
        }else{
            return res.status(404).json({message:"question not found!"})
        }        
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}