import express from 'express';

import route1 from './routes/UserRoutes.js'
import router2 from './routes/reminderRoutes.js';
import { connectDB } from './config/connectDB.js';

const app=express()

const PORT=process.env.PORT;

connectDB();

app.use(express.json())
app.use(express.urlencoded({'extended':false}))

app.use('/user',route1);
app.use('/rem',router2);

app.listen(PORT,()=>{
    console.log(`Port at ${PORT}`)
})