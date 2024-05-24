const express = require("express");
const cors = require("cors");
require("dotenv").config();

const roomRoutes = require("./routes/rooms");
const messageRoute = require("./routes/messages");
const setUpSocket = require("./socketio/socket");

const app = express();
const port = process.env.PORT | 5000;

//==========middlewires ===========
app.use(
  cors({
    origin: ["https://userstory-chatrooms.vercel.app", "http://localhost:3000"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);
app.use(express.json());

//==========api endpoinds ==========
app.use("/api/rooms", roomRoutes);
app.use("/api/rooms", messageRoute);

//========== initial server run = =========
app.get("/", (req, res) => {
  res.send("server is running");
});

const server = app.listen(port, () => {
  console.log("server is running with 5000");
});

//============= set up socket io ============
const io = require("socket.io")(server, {
    cors: {
        origin: "https://userstory-chatrooms.vercel.app",
        methods: ["GET", "POST"]
    },
    pingTimeout: 60000
});

setUpSocket(io);
