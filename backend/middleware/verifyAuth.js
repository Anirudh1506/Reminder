import jwt from 'jsonwebtoken';

const verifyAuth=(req,res,next)=>{
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        const token=req.headers.authorization.split(' ')[1];

        if(!token){
            return res.status(400).send('Token not found');
        }
        jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
            if(err) return res.status(400).send('Token not valid');
            req.user=decoded.name;
            next();
        });
    }
    else{
        return res.status(400).send("Token not found");
    }
}

export default verifyAuth;  