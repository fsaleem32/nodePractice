const mongoose = require('mongoose');
const {Schema , model} = mongoose;

const userSchema = new Schema({
    firstname: {
        type: 'string',
        required: true,
        trim : true
    },
    lastname:{
        type: 'string',
        required: true,
        trim : true
    },
    email:{
        type: 'string',
        required: true,
        trim : true,
        unique: true
    },
    password:{
        type: 'string',
        trim : true
    }
})
module.exports = model("userSchema" , userSchema)