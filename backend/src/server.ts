import express, {json } from 'express'
import userRoute from './routes/userRoute'
import questionRoute from './routes/questionRoute'

const app=express()

app.use(json())
app.use('/users',userRoute)
// app.use('/questions',questionRoute)

app.listen(5000,()=>{
    console.log("server ready...");
})

export default app