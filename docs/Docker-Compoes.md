# Запуск локально из docker-compose

### Создаем файл `docker-compose.yml`:

```
# Версия
version: '3'

services:
  # Имя сервиса
  test-ts-app-cli:
    
    # Выполняем сборку
    build:
      # Где искать
      context: .
      # Файл сборки
      dockerfile: Dockerfile
    
    # Имя контейнера
    container_name: test-ts-app-cli-exec
    
    # Выполняет перезапуск все время, если приложениее остановилось
    # restart: unless-stopped
    
    # Переменные среды
    environment:
      - PORT=3000
    # Порты
    ports:
      - "4000:3000"
    # Мап дисков
    volumes:
      - ./:/usr/src/app
    
    # Запуск приложения
    command: node lib/index.js
```

### Работа с файлом

1. Запуск `docker-compose up -d` `-f <имя композ-конфига>`
2. Остановка `docker-compose down`
