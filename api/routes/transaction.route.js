import express from 'express'
import {transactionCreate} from '../controllers/transaction.controller.js'
const router = express.Router()

router.post('/create', transactionCreate)



export default router