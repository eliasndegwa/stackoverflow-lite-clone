import express,{json} from 'express'
import cron from 'node-cron'
import { sendWelcomeEmail } from './Email Services/welcomeEmail';

const app =  express()
app.use(json())

cron.schedule('*/5 * * * * *', async() => {
    await sendWelcomeEmail()
    
});

app.listen(6000,()=>console.log("running..."))