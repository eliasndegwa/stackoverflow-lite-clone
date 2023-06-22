import express, {json } from 'express'
import userRoute from './routes/userRoute'
import questionRoute from './routes/questionRoute'

const app=express()

app.use(json())
app.use('/users',userRoute)
app.use('/questions',questionRoute)


export default app