# Admin Panel (Vue 3 + Vite)

Админ-панель с роутингом, глобальным состоянием (Pinia), компонентным подходом и счётчиком активных
сессий через WebSocket (Socket.io). Проект готов для деплоя на GitHub Pages.

## Требования

- Node.js >= 18
- npm >= 9

## Установка

```bash
npm install
```

## Скрипты

- `npm run dev` — параллельный запуск фронта и сокет-сервера (удобно для разработки)
- `npm start` — только фронтенд (Vite dev server)
- `npm run dev:client` — только фронтенд (альтернатива `npm start`)
- `npm run dev:socket` — только Socket.io сервер (`server/socket-server.js`)
- `npm run build` — сборка прод-версии (с проверкой типов) в `dist`
- `npm run preview` — локальный предпросмотр собранной `dist`
- `npm run type-check` — проверка типов через `vue-tsc`
- `npm run lint` — ESLint с автофиксами
- `npm run format` — форматирование кода Prettier
- `npm run deploy` — деплой собранной `dist` на GitHub Pages (ветка `gh-pages`)

## Источники данных

- Заказы и продукты загружаются с MockAPI: см. `src/constants/api.ts`.
- Счётчик активных сессий — через Socket.io: см. `src/composables/useActiveSessions.ts` и
  `server/socket-server.js`.

## Локальный запуск (Frontend + Socket.io)

Вариант A (рекомендовано):

```bash
npm run dev
```

Команда поднимает одновременно фронтенд и Socket.io сервер. Сервер по умолчанию слушает
`http://localhost:3001` и шлёт событие `sessions` с количеством активных подключений.

Вариант B (раздельно):

```bash
# Терминал 1 — фронт
npm start

# Терминал 2 — сокеты
npm run dev:socket
```

Откройте приложение по адресу, который покажет Vite. В правом верхнем углу в `TopMenu` компоненте
`DateInfo` будет отображаться текущая дата/время и «Active sessions: N».

## Окружение (VITE_SOCKET_URL)

Клиент сокета берёт URL из `import.meta.env.VITE_SOCKET_URL`, иначе по умолчанию —
`http://localhost:3001`.

- Для разработки можно ничего не настраивать, если вы запускаете локальный `dev:socket`.
- Для продакшена создайте файл `.env.production` в корне проекта и укажите публичный HTTPS-URL
  задеплоенного Socket.io сервера:

```env
VITE_SOCKET_URL=https://your-socket-host.example.com
```

Важно: GitHub Pages — это статический хостинг и не запускает ваш Node.js сервер. Для работы счётчика
сессий на проде вам нужен внешний хостинг Socket.io с HTTPS/WSS (VPS). Сервер из
`server/socket-server.js` можно развернуть там.

## Деплой на GitHub Pages

В проекте уже настроен `base: '/admin-panel/'` в `vite.config.ts` — это важно для корректных путей.

Быстрый способ:

```bash
npm run build
npm run deploy
```

Команда `deploy` публикует содержимое `dist` в ветку `gh-pages` через пакет `gh-pages`. После пуша
включите GitHub Pages в настройках репозитория и укажите источник — `gh-pages` (корень).
