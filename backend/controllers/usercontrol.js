import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import user from '../models/User.js';

export const getUsers=async(req,res)=>{
    const users=await user.find();
    return res.json(users);
}

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
        password,
        email
    });
    return res.status(201).json(us);
}