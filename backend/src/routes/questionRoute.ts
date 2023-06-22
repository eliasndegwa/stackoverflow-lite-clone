import { Router } from "express";
import { postQuestion, deleteQuestion, getAllQuestions, getOneQuestion, updateQuestion } from "../controllers/questionController";
import { verifyUser } from "../Middleware/verifyToken";

const questionRoute=Router()

questionRoute.get('',verifyUser,getAllQuestions)
questionRoute.post('/:userId',verifyUser,postQuestion)
questionRoute.get('/search/:questionId',verifyUser,getOneQuestion)
questionRoute.put('/update/:questionId',verifyUser, updateQuestion)
questionRoute.delete('/delete/:questionId',verifyUser, deleteQuestion)

export default questionRoute