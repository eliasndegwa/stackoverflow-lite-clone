import express, {json } from 'express'
import router from './routes/todoRoute'
import userRoute from './routes/userRoute'

const app=express()

app.use(json())
app.use('/todo',router)
app.use('/users',userRoute)

app.listen(5000,()=>{
    console.log("server ready...");
})