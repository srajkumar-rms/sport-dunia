import express from 'express'
import { userCreate,getUser } from '../controllers/user.controller.js'
const router = express.Router()


router.post('/create', userCreate).get('/get', getUser)



export default router