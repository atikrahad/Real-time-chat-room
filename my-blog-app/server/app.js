const express = require("express")
const cors = require("cors")
require("dotenv").config()

const roomRoutes = require("./routes/rooms")
const messageRoute = require("./routes/messages")

const app = express()
const port = process.env.PORT | 5000


//==========middlewires ===========
app.use(cors())
app.use(express.json())

//==========api endpoinds ==========
app.use('/api/rooms', roomRoutes);
app.use('/api/rooms', messageRoute);



//========== initial server run = =========
app.get("/", (req, res)=>{
    res.send("server is running")
})

app.listen(port, ()=>{
    console.log("server is running with 5000")
})