const http = require("http");
const express = require("express");
const app = express();

const PORT = 8000;

const serverHttp = http.createServer(app);
const io = require("socket.io")(serverHttp);

// SOCKET
io.addListener("connection", (socket) => {
  socket.addListener("New message", (msg) => {
    io.emit("New message", msg);
  });
});

// STATIC
app.use(express.static("public"));

// RUN SERVER
serverHttp.listen(PORT, "192.168.0.163", () => {
  console.log(
    `Server running on port ${PORT}\nAccess: http://localhost:${PORT}/`
  );
});