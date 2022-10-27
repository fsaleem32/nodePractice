const express = require('express');
const router = express.Router();
const {registerUserfn, loginFn} = require("../controllers/userController");
const inputValidationFn = require("../middlewares/validation")



router.post('/register',inputValidationFn, registerUserfn)
router.post("/login" , loginFn)
module.exports = router