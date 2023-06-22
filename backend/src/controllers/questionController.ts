import {Request, RequestHandler, Response} from "express";
import {v4 as uid} from "uuid"
import { QuestionRequest, Question } from "../interfaces/interfaces";
import { DatabaseHelper } from '../Database helper';

export const getAllQuestions:RequestHandler=async (req, res) => {
    try {
        let questions: Question[] =  (await DatabaseHelper.exec('getAllQuestions')).recordset;
        return res.status(200).json(questions);
    } catch (error: any) {
      return res.status(500).json({message:error.message});
    }
}

export const postQuestion=async(req:Request<{userId:string}>,res:Response)=>{
    try {
        const questionId=uid()
        const { title, body ,tags} = req.body;
        const {userId} = req.params;
        await DatabaseHelper.exec('postQuestion',{questionId,userId,title,body})
         tags.forEach(async (tag: { tagId: string; }) => {
            await DatabaseHelper.exec('addQuestionTags',{tagId:tag.tagId, questionId})
         });
        return res.status(201).json({ message: "question submitted" });
      } catch (error: any) {
        return res.status(500).json({message:error.message});
      }
}

export const getOneQuestion:RequestHandler<{questionId:string}>=async (req, res)=>{
    try {
        const {questionId} = req.params
        let question: Question =  (await DatabaseHelper.exec('getOneQuestion',{questionId})).recordset[0];

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
        const {title,body,tags}=req.body
        const {questionId}=req.params
        const userId = req.data?.userId as string
        let question:Question = (await DatabaseHelper.exec('getOneQuestion',{questionId})).recordset[0];

        if(!question){
            return res.status(404).json({message:"question not found"})
        }else{
            // console.log(question.userId, userId,question);
            
            if (question.userId) {
                await DatabaseHelper.exec('updateQuestion',{questionId:questionId,userId:userId,title,body})
    
                tags.forEach(async (tag: { tagId: string; }) => {
                    await DatabaseHelper.exec('updateQuestionTags',{tagId:tag.tagId, questionId:questionId}) 
                 }); 
            }else{
                return res.status(401).json({ message: "Not your Question" });
            }
            return res.status(200).json({message:"question updated successfully"})
        }
         

    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}

export const deleteQuestion=async(req:QuestionRequest,res:Response)=>{
    try {
        const {questionId} =req.params
        const userId = req.data?.userId as string
        let question: Question =  (await DatabaseHelper.exec('getOneQuestion',{questionId:questionId})).recordset[0];

        if(question.userId === userId){
            await DatabaseHelper.exec('deleteQuestion',{questionId:questionId})
          
            return res.status(200).json({message:"question deleted successfully!"})
        }else{
            return res.status(404).json({message:"question not found!"})
        }        
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}