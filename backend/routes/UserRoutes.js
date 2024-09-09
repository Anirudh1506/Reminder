import express from 'express';

import { createUser, getUsers } from '../controllers/usercontrol.js';

const route1=express.Router()

route1.post('/',createUser);

route1.get('/',getUsers);

export default route1;