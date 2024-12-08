

export const userCreate = async(req,res,next)=>{
    res.status(200).json({"username": "Dummy User created"})

}

export const getUser = async(req,res,next)=>{
    res.status(200).json({"username": "Dummy User retrive"})
}