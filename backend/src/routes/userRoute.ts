import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserByEmail, getUserById, updateUser, userLogin } from "../controllers/userController";
import { verifyUser } from "../Middleware/verifyToken";


const userRoute=Router()
userRoute.post('/register',createUser)
userRoute.post('/login',userLogin)
userRoute.get('',verifyUser,getAllUsers)
userRoute.get('/:userId',verifyUser,getUserById)
userRoute.get('/email/:email',verifyUser,getUserByEmail)
userRoute.put('/:userId',verifyUser,updateUser)
userRoute.delete('/:userId',verifyUser,deleteUser)



export default userRoute