import { io, Socket } from "socket.io-client";
import { ServerToClientEvents, ClientToServerEvents } from "./events";
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:8000",
  {
    autoConnect: false,
    withCredentials: true,
  }
);

socket.on("connect_error", (err) => {
  console.log("Socket connection error");
  console.log(err);
});

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;