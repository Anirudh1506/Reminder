import express from 'express';

import { createUser, getUsers,loginControl,verify } from '../controllers/usercontrol.js';

const route1=express.Router()

route1.post('/',createUser);

route1.get('/',getUsers);

route1.post('/log',loginControl);

route1.get('/confirm/:token',verify)

export default route1;