const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000
const db = require("./config/db")

//connect front-end
const cors = require('cors');
app.use(cors());
//access .env file
const dotenv = require("dotenv");

dotenv.config();

// connect db
db()
app.use(express.json());
//routes
app.get("/" , (req, res) => {
    res.send("asdasdads")
})
app.use("/api/user", require("./routes/userRoutes"))
app.use("/api/login" , require("./routes/userRoutes"))





app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});