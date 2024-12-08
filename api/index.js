import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
import dotenv from 'dotenv'
import transactionRouter from './routes/transaction.route.js'
dotenv.config()


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to DB')
}).catch(err=>{
    console.log(err);
    
})

const app = express()
app.use(express.json())

app.listen(5000, ()=>{
    console.log('App listening on port 5000');
    
})

app.use('/api/user', userRouter)
app.use('/api/transaction', transactionRouter)