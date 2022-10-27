const userModel = require("../modals/userModal");
const passwordHash = require("password-hash");
const {TokenResponseFn} = require("../middlewares/response")

const registerUserfn =async (req,res) =>{
    console.log(req?.body?.username)
    const {email, password} = req?.body;
    req.body.password = passwordHash.generate(password);

    await userModel.findOne({email}).exec(async (err, response) => {
        console.log(err, "errors")
        if (err) {
            return res.status(400).json({status: false, message: "Something went wrong"})
        } else if (response) {
            return res.status(400).json({status: false, message: "User already exists"})
        } else if (response === null) {
            userModel.create(req.body).then(response => {
                return res.status(200).json(TokenResponseFn(response));
            }).catch(err => {
                return res.status(400).json({status: false, message: "Something went wrong"}) , console.error(err)
            })
        }
    })
}

const loginFn = (req, res) => {
    const {email, password} = req.body;
    userModel.findOne({email}).exec((err, response) => {
        if (err) {
            return res.status(400).json({status: false, message: "Something went wrong"})
        }else if(response){
            const verifyPassword = passwordHash.verify(password , response?.password);
            if(verifyPassword){
                return res.status(200).json(TokenResponseFn(response))
            }
        }
    })
}

module.exports = {registerUserfn , loginFn}