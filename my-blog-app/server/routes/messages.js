const express = require("express");
const router = express.Router();
const { getMessagesByRoom, createMessage } = require("../db/models/Message");

//============  create a single message api route ============

router.get("/:id/messages", async (req, res) => {
  const { id } = req.params;
  const roomID = parseFloat(id);
  try {
    const messages = await getMessagesByRoom(roomID);
    res.status(200).json({
      successfull: true,
      message: "Successfully get all messages list",
      data: messages,
    });
  } catch (err) {
    res.status(500).json({
      successfull: false,
      message: "something went wrong",
      error: err,
    });
  }
});

//============  create a single message api route ============

router.post("/:id/messages", async (req, res) => {
  const { id } = req.params;
  const roomID = parseFloat(id);
  const { text, name } = req.body;

  try {
    const message = await createMessage(roomID, name, text);
    res.status(200).json({
      successfull: true,
      message: "Successfully create a message",
      data: message,
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
