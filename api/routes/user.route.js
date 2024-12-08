import express from 'express'
import { userCreate,getUser } from '../controllers/user.controller.js'
const router = express.Router()


router.post('/create', userCreate).get('/get/:id', getUser)



export default router