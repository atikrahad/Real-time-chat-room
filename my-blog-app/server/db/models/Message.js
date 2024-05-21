const db = require("../db");

const getMessagesByRoom = async (roomId) => {
  const res = await db.query("SELECT * FROM messages WHERE room_id = $1", [
    roomId,
  ]);
  return res.rows;
};

const createMessage = async (roomId, authorName, text) => {
  const res = await db.query(
    "INSERT INTO messages(room_id, message_author_name, message_text) VALUES($1, $2, $3) RETURNING *",
    [roomId, authorName, text]
  );
  return res.rows[0];
};

module.exports = { getMessagesByRoom, createMessage };