import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import user from '../models/User.js';
import nodemailer from 'nodemailer'

export const getUsers=async(req,res)=>{
    const users=await user.find().select('-password');
    return res.json(users);
}

const transporter=nodemailer.createTransport({
    service:"Gmail",
    host: process.env.MAIL_SMTP,
    port: process.env.MAIL_PORT,
    secure: false,
    auth:{
        user:process.env.MAIL,
        pass: process.env.PASSWORD
    },
    timeout:6000
});

export const createUser=async(req,res)=>{
    const {name,password,email}=req.body;
    const u=await user.findOne({name});
    if(u){
        return res.status(400).send('User already exists');
    }
    const salt=await bcrypt.genSalt(10);
    const hpwd=await bcrypt.hash(password,salt);
    const us=await user.create({
        name,
        password:hpwd,
        email
    });
    const t=genToken(name);
    const port=process.env.PORT;
    const url=`http://localhost:${port}/user/confirm/${t}`
    sendMail(email,url);
    return res.status(201).json(us);
}

const sendMail=async(to,text)=>{
    const mail={
        from:process.env.MAIL,
        to,
        subject: 'Confirm your Email',
        text:`Confirm your E-mail ${text}` 
    }
    try{
        await transporter.sendMail(mail);
        console.log('Mail Sent')
    }catch(e){
        console.log(e);
    }
}

export const verify=(req,res)=>{
    const {token}=req.params
    jwt.verify(token,process.env.SECRET_KEY,async(err,decoded)=>{
        if(err){
            return res.status(401).send('Not correct')
        }
        const u=await user.findOne({name:decoded.name})
        u.verified=true;
        await u.save();
    });
    
    return res.redirect('http://localhost:3000/log')
}

export const loginControl=async(req,res)=>{
    const {name,password}=req.body;
    const u=await user.findOne({name});
    if(!u.verified) return res.status(401).send('User not verified')
    if(u && await bcrypt.compare(password,u.password)) return res.status(201).json({
        name:'name',
        token:genToken(name)
    })
    return res.status(400).send("Not done");
}

const genToken=(name)=>{
    const token= jwt.sign({name},process.env.SECRET_KEY,{
        expiresIn:'1d'
    });
    return token;
}