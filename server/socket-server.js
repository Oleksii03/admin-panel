// import { Server } from 'socket.io';

// const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

// const io = new Server(PORT, {
//   cors: {
//     origin: '*',
//     methods: ['GET', 'POST'],
//   },
// });

// io.on('connection', socket => {
//   io.emit('sessions', io.of('/').sockets.size);

//   socket.on('disconnect', () => {
//     io.emit('sessions', io.of('/').sockets.size);
//   });
// });

// console.log(`[socket] server running on http://localhost:${PORT}`);

import { Server } from 'socket.io';
import http from 'http';

const PORT = process.env.PORT || 3001;

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', socket => {
  io.emit('sessions', io.of('/').sockets.size);

  socket.on('disconnect', () => {
    io.emit('sessions', io.of('/').sockets.size);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[socket] server running on port ${PORT}`);
});
