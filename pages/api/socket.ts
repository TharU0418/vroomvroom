// pages/api/socket.ts (example for Next.js API route)
import { Server } from 'socket.io';

const ioHandler = (req: any, res: any) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', socket => {
      console.log('New client connected');

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  }
  res.end();
};

export default ioHandler;
