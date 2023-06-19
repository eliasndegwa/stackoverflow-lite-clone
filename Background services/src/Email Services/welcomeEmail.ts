import mssql from 'mssql'
import ejs from 'ejs'
import dotenv from 'dotenv'
import path from 'path'
import { sqlConfig } from '../config'
import { sendMail } from '../Helpers/sendMail'
dotenv.config({path:path.resolve(__dirname,'../../.env')})

interface User{
    userId:string
    username:string
    email:string
    password:string
    role:string
}

export const sendWelcomeEmail=async ()=>{
    const pool=await mssql.connect(sqlConfig)
    const users:User[]=(await (await pool.request()).query(`SELECT * FROM users	WHERE welcomeEmailSent=0`)).recordset

    for(let user of users){

        ejs.renderFile('Templates/welcome.ejs',{name:user.username},async(err,html)=>{

            let messageOptions={
                from: process.env.EMAIL,
                to: user.email,
                subject: "Hello There!!",
                html
            }

            try {
                await sendMail(messageOptions)
                await pool.request().query(`UPDATE users SET welcomeEmailSent=1 WHERE userId='${user.userId}'`)
            } catch (error) {
                console.log(err);                
            }     
        })
    }
    
}