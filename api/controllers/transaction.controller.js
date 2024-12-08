import Transaction from '../models/transaction.model.js'
import { distributeEarnings } from './user.controller.js'

export const transactionCreate = async(req,res,next)=>{
    try {
        const {userId, amount} = req.body
        const transaction = new Transaction({user: userId, amount})
        await transaction.save()
        await distributeEarnings(userId,amount)
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
}