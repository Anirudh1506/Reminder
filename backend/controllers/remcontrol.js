import remind from '../models/Reminder.js';
import nodemailer from 'nodemailer';
import cron from 'node-cron';

export const getRem=async(req,res)=>{
    const re=await remind.find();
    console.log(req.user);
    return res.status(201).json(re);
}

const transporter=nodemailer.createTransport({
    service:"Gmail",
    host: 'smtp.gmail.com',
    port: 587, // Use port 587 for TLS
    secure: false, // Use false for TLS
    auth:{
        user:process.env.MAIL,
        pass: process.env.PASSWORD
    },
    timeout:6000
});

const sendMail=async(to,text)=>{
    const mail={
        from:process.env.MAIL,
        to,
        subject:"Here is your reminder mail",
        text
    }
    try{
        await transporter.sendMail(mail);
        console.log("Email sent");
    }catch(e){
        console.log(e);
    }
}

export const addRem=async(req,res)=>{
    const {data,cat,date}=req.body;
    const d=new Date().setHours(0,0,0,0);
    const r=await remind.create({
        data,
        date:date,
        cat,
        curr:d
    });
   /*const send=sendMail("2100031630cseh@gmail.com",data);*/
    //console.log(send);
    return res.status(201).json(r);
}