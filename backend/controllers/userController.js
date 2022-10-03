const userModal = require("../modals/userModal")
const passwordHash = require("password-hash")

const registerUserfn = (req,res) =>{
    const {email, password} = req.body
    req.body.password = passwordHash.generate(password)

    userModal.findone({email}.exec((err,res)=>{
        if(err){
            return res.status(400).json({status:false , message:"Something went wrong"})
        }else if(res){
            return res.status(400).json({status:false , message:"User already exists"})
        }else if (res=== null){
            userModal.create(req.body).then(res=>{
                return res.status(200).json(res)
            }).catch(err=>{
                return res.status(400).json({status:false , message:"Something went wrong"})
            })
        }
    }))
    res.send("asasas")
}

module.exports = registerUserfn