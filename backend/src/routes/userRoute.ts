import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserByEmail, getUserById, updateUser } from "../controllers/userController";


const userRoute=Router()
userRoute.get('',getAllUsers)
userRoute.post('',createUser)
userRoute.get('/:userId',getUserById)
userRoute.get('/email/:email',getUserByEmail)
userRoute.put('/:userId',updateUser)
userRoute.delete('/:userId',deleteUser)


export default userRoute