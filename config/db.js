const mongoose = require('mongoose');

const connectMongoDb = () =>{
    console.log('connect' , process.env.MONGODB_URL)
    try{
        mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connection successfully")
    }catch (err){
        console.error("connection failed")
    }
}

module.exports = connectMongoDb