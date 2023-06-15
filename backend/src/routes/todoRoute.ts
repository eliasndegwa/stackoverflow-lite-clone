import { Router } from "express";
import { addTodo, deleteTodo, getAll, getById, updateTodo } from "../controllers/todoController";

const router=Router()

router.get('',getAll)
router.post('',addTodo)
router.get('/:id',getById)
router.put('/:id',updateTodo)
router.delete('/:id',deleteTodo)

export default router