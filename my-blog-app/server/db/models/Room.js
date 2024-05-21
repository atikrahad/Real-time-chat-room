const db = require('../db');

const getRooms = async () => {
  const res = await db.query('SELECT * FROM rooms');
  return res.rows;
};

const createRoom = async (name) => {
  const res = await db.query('INSERT INTO rooms(name) VALUES($1) RETURNING *', [name]);
  return res.rows[0];
};

module.exports = { getRooms, createRoom };
