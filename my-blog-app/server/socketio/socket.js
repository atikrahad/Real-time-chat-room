const socketSetup = (io) => {
  const users = [];
  io.on("connection", (socket) => {
    
    socket.on("setup", (userData) => {
      socket.join(userData.id);

      users.push(userData.id);
      socket.emit("conected");
    });
    socket.on("joinChat", (room) => {
      socket.join(room);
    });
    socket.on("new massage", (newMessageReceved) => {
      const uniqueuser = Array.from(new Set(users));
      uniqueuser.forEach((user) => {
        socket.in(user).emit("message receved", newMessageReceved);
      });
    });
  });
};

module.exports = socketSetup;
