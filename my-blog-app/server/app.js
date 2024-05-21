const express = require("express")
const cors = require("cors")
require("dotenv").config()

const roomRoutes = require("./routes/rooms")

const app = express()
const port = process.env.PORT | 5000


app.use(cors())
app.use(express.json())


app.use('/api/rooms', roomRoutes);


app.get("/", (req, res)=>{
    res.send("server is running")
})

app.listen(port, ()=>{
    console.log("server is running with 5000")
})