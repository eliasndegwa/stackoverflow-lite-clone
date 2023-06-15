import express, {json } from 'express'
import router from './routes/todoRoute'

const app=express()

app.use(json())
app.use('/todo',router)


app.listen(5000,()=>{
    console.log("server ready...");
})