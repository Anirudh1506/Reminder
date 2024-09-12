import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import user from '../models/User.js';

export const getUsers=async(req,res)=>{
    const users=await user.find().select('-password');
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
        password:hpwd,
        email
    });
    return res.status(201).json(us);
}

export const loginControl=async(req,res)=>{
    const {name,password}=req.body;
    const u=await user.findOne({name});
    if(u && await bcrypt.compare(password,u.password)) return res.status(201).json({
        name:'name',
        token:genToken(name)
    })
    return res.status(400).send("Not done");
}

const genToken=(name)=>{
    const token= jsonwebtoken.sign({name},process.env.SECRET_KEY,{
        expiresIn:'1d'
    });
    return token;
}