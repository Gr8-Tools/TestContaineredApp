# Запуск контейнера на локально докере из Dockerfile

### Dockerfile

```
#SET UP NODE
FROM node:lts-alpine

#SET UP CONTAINER-PROJECT DIR
WORKDIR /usr/src/app

#COPY AND INSTALL DEPENDENCIES
COPY package*.json ./
RUN npm install

# COPY APP
COPY . .

# EXPOSE PORT (WITHOUT THIS WON'T BE ACCESSABLE THROUTH 'DOCKER RUN')
EXPOSE 3000

#BUILD CODE
RUN npm run build

#RUN PROJECT
CMD [ "node", "lib/index.js" ]
```

### Команды

1. Собирает образ (локально): ```docker build . -t <ИМЯ_ТЕГА>```
2. Запускает образ (требуется указать в переменных среды порт, так как приложение узнает порт из переменных среды): ```docker run --name <ИМЯ_КОНТЕЙНЕРА> -p <ВНЕШНИЙ_ПОРТ>:<ВНУТРЕННИЙ_ПОРТ> --env=<КЛЮЧ_ПЕРЕМЕННОЙ_СРЕДЫ>=<ЗНАЧЕНИЕ_ПЕРЕМЕННОЙ_СРЕДЫ> -d <ОБРАЗ(он же ТЕГ)>:<ВЕРСИЯ('latest')>```
