# Install docker on linux server

## DOCKER

1. sudo apt update
2. sudo apt install apt-transport-https ca-certificates curl software-properties-common
3. curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
4. sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
> проверяет, можно ли установить докер (должен среди прчоего вернуть в шапке `Installed: (none)`)
5. apt-cache policy docker-ce 
6. sudo apt install docker-ce
> Проверяем статус (должен быть `active`)
7. sudo systemctl status docker

## DOCKER-COMPOSE

1. sudo apt-get install docker-compose-plugin
2. docker compose version

## SWARM

> Проверяем, активен ли (`Swarm: inactive`)
1. docker info | grep Swarm
> (`Swarm: inactive`) Активируем 
2. docker swarm init