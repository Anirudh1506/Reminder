import express from 'express';
import cors from 'cors';

import route1 from './routes/UserRoutes.js'
import router2 from './routes/reminderRoutes.js';
import verifyAuth from './middleware/verifyAuth.js';
import { connectDB } from './config/connectDB.js';


const app=express()

const PORT=process.env.PORT;
connectDB();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({'extended':false}))

app.use('/user',route1);
app.use(verifyAuth)
app.use('/rem',router2);

app.listen(PORT,()=>{
    console.log(`Port at ${PORT}`)
})