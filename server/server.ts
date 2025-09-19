import { config } from "dotenv";
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import userRoutes from "./routes/authRoute";
import waterRoutes from "./routes/waterLogsRoute";
import { Server as SocketIoServer } from "socket.io";
import { createServer } from "http";
import { getLatestUserWaterLogs } from "./services/waterLogs";
// Load env variables
config();

type DataType = {
  id: number;
  amount: number;
  user_id: number;
  created_at: string;
  unit: string;
};

const app: Application = express();
const PORT = process.env.PORT || 3001;
const server = createServer(app);

//websocket
export const io = new SocketIoServer(server, {
  cors: {
    origin: "*", // adjust for your frontend
    methods: ["GET", "POST"],
  },
});

io.on("connect", (socket) => {
  socket.on("waterLogs", async (entries) => {
    try {
      const latestEntries = await getLatestUserWaterLogs(
        parseInt(entries["user_id"])
      );
      socket.emit("waterLogs", latestEntries);
    } catch (err) {
      console.error(err);
    }
  });
  console.log("connected ", socket.id);
  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id);
  });
});

// Middleware
app.use(express.json()); // parse JSON body
app.use(cors());

// Health check
app.get("/health", (_req: Request, res: Response) => {
  res.json({ ok: true, uptime: process.uptime() });
});

// Routes
app.use("/api", userRoutes);
app.use("/api", waterRoutes);

// 404 handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: "Not Found" });
});

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
