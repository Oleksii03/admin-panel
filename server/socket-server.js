import { Server } from 'socket.io';
import { createServer } from 'node:http';

const PORT = process.env.PORT || 3001;

const server = createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('OK');
    return;
  }
  res.statusCode = 404;
  res.end('Not Found');
});
const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST'],
  },
  path: '/socket.io',
});

io.on('connection', socket => {
  io.emit('sessions', io.of('/').sockets.size);

  socket.on('disconnect', () => {
    io.emit('sessions', io.of('/').sockets.size);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[socket] server listening on 0.0.0.0:${PORT}`);
});
