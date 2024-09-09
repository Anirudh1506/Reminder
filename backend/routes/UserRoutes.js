import express from 'express';

import { createUser, getUsers,loginControl } from '../controllers/usercontrol.js';

const route1=express.Router()

route1.post('/',createUser);

route1.get('/',getUsers);

route1.post('/log',loginControl);

export default route1;