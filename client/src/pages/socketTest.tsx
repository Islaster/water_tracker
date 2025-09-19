import { useEffect } from "react";
import { io } from "socket.io-client";

export default function TestSocket() {
  useEffect(() => {
    // create socket only once
    const socket = io("http://localhost:3001");

    socket.on("connect", () => {
      console.log("🎉 Connected to server: ", socket.id);
    });

    socket.on("waterLogs", (entries) => {
      console.log("entries");
      console.log(entries);
    });

    // cleanup
    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>Check console for socket logs!</div>;
}
