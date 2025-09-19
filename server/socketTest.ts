import express from "express";
import { createServer } from "http";
import { Server as SocketIoServer } from "socket.io";

const app = express();
const PORT = 3001;

const server = createServer(app);

// Socket.IO setup
const io = new SocketIoServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Connection handler
io.on("connection", (socket) => {
  console.log("✅ Client connected:", socket.id);

  // test emit
  socket.emit("connected", { message: "Welcome!" });

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id);
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
