import express from 'express';
import { addRem, getRem } from '../controllers/remcontrol.js';

const router2=express();

router2.post('/',addRem);
router2.get('/',getRem);

export default router2;