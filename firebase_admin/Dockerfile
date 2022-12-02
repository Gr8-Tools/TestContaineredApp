#SET UP NODE
FROM node:lts-alpine

# update packages
RUN apk update

#SET UP CONTAINER-PROJECT DIR
WORKDIR /usr/src/app

#COPY AND INSTALL DEPENDENCIES
COPY package*.json ./
COPY tsconfig.json ./

# copy source code to /usr/src/app/src folder
COPY src ./src

# check files list
RUN ls -a

#BUILD CODE
RUN npm install
RUN npm run build

# check files list
RUN ls -a
RUN ls /usr/src/app -a

# copy built to /usr/src/app/lib folder
COPY lib ./lib
RUN ls /usr/src/app -a

# EXPOSE PORT (WITHOUT THIS WON'T BE ACCESSABLE THROUTH 'DOCKER RUN')
EXPOSE 3000

#RUN PROJECT
RUN echo "Docker file executed"
CMD [ "node", "./lib/index.js" ]


