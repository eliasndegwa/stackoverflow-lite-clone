import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path:path.resolve(__dirname,'../../.env')})

let configOptions={
    host: "smtp.gmail.com",
    service:'gmail',
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
}

const createTransporter=(configOpts:any)=>{
    return nodemailer.createTransport(configOpts)
}

export const sendMail=async (messageOptions:any)=>{
    let transporter=createTransporter(configOptions)
    await transporter.sendMail(messageOptions,(err,res)=>{
        console.log(res);
        
    })
}