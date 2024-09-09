import remind from '../models/Reminder.js';

export const getRem=async(req,res)=>{
    const re=await remind.find();
    return res.status(201).json(re);
}

export const addRem=async(req,res)=>{
    const {data,cat}=req.body;
    const dat=new Date();
    const r=await remind.create({
        data,
        date:dat,
        cat
    });
    return res.status(201).json(r);
}