import { Router } from "express";
import { createQuestion, deleteQuestion, getAllQuestions, getQuestionById, updateQuestion } from "../controllers/questionController";

const questionRoute=Router()

questionRoute.get('',getAllQuestions)
questionRoute.post('',createQuestion)
questionRoute.get('/:questionId',getQuestionById)
questionRoute.put('/:questionId', updateQuestion)
questionRoute.put('/:questionId', deleteQuestion)

export default questionRoute