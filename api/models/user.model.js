import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    directReferrals: [{
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    }],
    earnings: {
        type: Number,
        default: 0
    },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

const User = mongoose.model("User", userSchema)

export default User