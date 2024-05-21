const express = require("express");
const router = express.Router();
const { getRooms, createRoom } = require("../db/models/Room");

//=========== get all room list api route==============

router.get("/", async (req, res) => {
  try {
    const rooms = await getRooms();
    res.status(200).json({
      successfull: true,
      message: "Successfully get all room lists",
      data: rooms,
    });
  } catch (err) {
    res.status(500).json({
      successfull: false,
      message: "something went wrong",
      error: err,
    });
  }
});


//=========== create a single room api route ==============

router.post("/", async (req, res) => {
  const { name } = req.body;

  try {
    const room = await createRoom(name);
    res.status(200).json({
      successfull: true,
      message: "Successfully create a room",
      data: room,
    });
  } catch (err) {
    res.status(500).json({
      successfull: false,
      message: "something went wrong",
      error: err,
    });
  }
});

module.exports = router;
