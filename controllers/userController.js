const userModel = require("../modals/userModal");
const passwordHash = require("password-hash");

const registerUserfn =async (req,res) =>{
    const {email, password} = req?.body;
    req.body.password = passwordHash.generate(password);

    userModel.findOne({ email }).exec(async(err, response) => {
        console.log(err , "errors")
        if(err){
            return res.status(400).json({status:false , message:"Something went wrong"})
        }else if(res){
            return res.status(400).json({status:false , message:"User already exists"})
        }else if (res=== null){
            await userModal.create(req.body).then(res=>{
                return res.status(200).json(res)
            }).catch(err=>{
                return res.status(400).json({status:false , message:"Something went wrong"})
            })
        }
    })
    res.send("asasas")
}

module.exports = registerUserfn