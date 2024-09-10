import express from 'express';

import { addRem, getRem } from '../controllers/remcontrol.js';
import verifyAuth from '../middleware/verifyAuth.js';


const router2=express();

router2.post('/',verifyAuth,addRem);
router2.get('/',verifyAuth,getRem);

export default router2;