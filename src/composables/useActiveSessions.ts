import { ref, onMounted, onUnmounted } from 'vue';
import { io, Socket } from 'socket.io-client';

export function useActiveSessions() {
  const sessions = ref<number>(0);
  let socket: Socket | null = null;

  const connect = () => {
    const url = import.meta.env.VITE_SOCKET_URL ?? 'http://localhost:3001';
    socket = io(url, {
      transports: ['polling', 'websocket'],
      path: '/socket.io',
      reconnection: true,
    });

    socket.on('sessions', (count: number) => {
      sessions.value = count ?? 0;
    });

    socket.on('connect_error', () => {
      sessions.value = 0;
    });
  };

  const disconnect = () => {
    if (socket) {
      socket.off('sessions');
      socket.disconnect();
      socket = null;
    }
  };

  onMounted(connect);
  onUnmounted(disconnect);

  return { sessions };
}
