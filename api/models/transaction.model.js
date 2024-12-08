import mongoose from 'mongoose'


const transactionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    amount: Number,
},{timestamps: true})


const Transaction = mongoose.model("Transaction", transactionSchema)

export default Transaction