const express = require('express');
const router = express.Router();
const {registerUserfn} = require("../controllers/userController");
const {inputValidationFn} = require("../middlewares/validation")



router.post('/register', function(req, res){
res.send("middleware")
} , registerUserfn);

module.exports = router