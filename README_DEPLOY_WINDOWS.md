# Деплой на Windows VDS через Docker (Windows-контейнеры)

Этот проект настроен для деплоя в Docker с Windows-контейнерами и двумя сервисами:

- `frontend` — контейнер IIS, который отдаёт собранное Vue-приложение (по пути `/admin-panel/`)
- `ws` — контейнер Node.js (сервер Socket.io), который слушает HTTP на порту `3001`

## Предварительные требования

- Windows Server (рекомендуется LTSC 2022) с Docker в режиме Windows-контейнеров
- Открытые порты: `80` (HTTP фронтенд) и `3001` (Socket.io)
- (Опционально) Терминация TLS вне контейнеров (IIS reverse proxy на хосте / Cloudflare / Nginx на другом узле)

## Переменные окружения

Создайте файл `.env` в корне (или используйте `.env.example`):

```
VITE_SOCKET_URL=http://<ваш_домен_или_IP>:3001
WS_PORT=3001
```

> `VITE_SOCKET_URL` попадает в билд фронтенда через `build args` и используется клиентом Socket.io.

## Запуск

```powershell
# Убедитесь, что Docker в режиме Windows-контейнеров
# Запустите сборку и старт контейнеров

docker compose -f docker-compose.windows.yml --env-file .env up -d --build

# Проверка статуса

docker compose -f docker-compose.windows.yml ps
```

После запуска:

- Фронтенд доступен по адресу `http://<хост>:80/admin-panel/`
- Сокет-сервер доступен по адресу `http://<хост>:3001`

## Примечания по роутингу и базовому пути

- В проекте настроено `base: '/admin-panel/'` в `vite.config.ts`. Поэтому фронтенд разворачивается под подпутём `/admin-panel/`.
- Контейнер IIS содержит `web.config` с правилами редиректа на `/admin-panel/` и SPA rewrite для Vue Router.

## Обновление

```powershell
docker compose -f docker-compose.windows.yml pull
# или, если локально меняете код:
docker compose -f docker-compose.windows.yml build --no-cache

docker compose -f docker-compose.windows.yml up -d
```

## Тесты и проверки

- Откройте `http://<хост>/admin-panel/`, навигация между страницами работает без 404
- В правом верхнем углу отображается "Active sessions: N"; при открытии вкладки число увеличивается
- В DevTools видны запросы Socket.io на `http://<хост>:3001/socket.io/...`

## Устранение проблем

- Если фронтенд даёт 404 на маршрутах — проверьте правила переписывания в `web.config` и что билд лежит в `C:\inetpub\wwwroot\admin-panel`
- Если количество сессий всегда `0` — проверьте доступность контейнера `ws` на порту `3001` и CORS (на сервере разрешён `origin: '*'`)

## TLS/HTTPS

- Рекомендуется терминировать TLS вне контейнеров (IIS на хосте / Cloudflare / Nginx на другом узле) и проксировать на порты 80/3001
- Для WSS (защищённые сокеты) установите сертификат на прокси и разрешите веб-сокеты/upgrade

---

Эти инструкции покрывают полный цикл: сборка, развертывание, проверка. При необходимости можно добавить CI/CD в будущем.