import { serve } from "bun";

serve({
  port: 3001,
  websocket: {
    open(ws) {
      console.log("Client connected");
    },
    message(ws, message) {
      if (message === "ping") {
        ws.send("pong");
      } else if (message === "pong") {
        ws.send("ping");
      }
    },
    close(ws) {
      console.log("Client disconnected");
    },
  },
  fetch(req, server) {
    if (server.upgrade(req)) {
      return;
    }
    return new Response("WebSocket server running", { status: 200 });
  },
});
