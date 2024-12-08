import User from '../models/user.model.js'

export const userCreate = async(req,res,next)=>{
    try {
        const {name, email, parentId } = req.body
        const user = new User({name, email})
        if(parentId){
            const parent = await User.findById(parentId)
            if(parent.directReferrals.length >= 8){
                return res.status(400).json({error: "Max referral limit reached"})
            }
            user.parent = parentId
            parent.directReferrals.push(user._id)
            await parent.save()
        }
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

export const getUser = async(req,res,next)=>{
    try {
      const user = await User.findById(req.params.id).populate("directReferrals");
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


export const distributeEarnings = async (userId,amount)=>{
    if(amount <= 1000) return
    const user = await User.findById(userId).populate("parent")
    if(user.parent){
        const parent = await User.findById(user.parent._id)
        const directEarnings = (5/100)*amount
        parent.earnings += directEarnings
        await parent.save()

        // io.emit("earningsUpdate", {
        //     userId: parent._id,
        //     earnings: parent.earnings,
    // });

    if(parent.parent){
        const grandparent = await User.findById(parent.parent._id)
        const indirectEarnings = (1 / 100) * amount;
        grandparent.earnings += indirectEarnings;
        await grandparent.save()
    }
    }
}