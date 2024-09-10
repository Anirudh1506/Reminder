import remind from '../models/Reminder.js';

export const getRem=async(req,res)=>{
    const re=await remind.find();
    return res.status(201).json(re);
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
    return res.status(201).json(r);
}