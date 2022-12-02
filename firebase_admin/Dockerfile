#SET UP NODE
FROM node:lts-alpine

# update packages
RUN apk update

#SET UP CONTAINER-PROJECT DIR
WORKDIR /server

#COPY AND INSTALL DEPENDENCIES
COPY package*.json ./
#BUILD CODE
RUN npm install

# copy code to /usr/src/app/src folder
COPY tsconfig.json ./
COPY . ./
#BUILD CODE
RUN npm run build

# copy built to /usr/src/app/lib folder
RUN ls /server/lib -a

# EXPOSE PORT (WITHOUT THIS WON'T BE ACCESSABLE THROUTH 'DOCKER RUN')
EXPOSE 3000

#RUN PROJECT
RUN echo "Docker file executed"
CMD [ "node", "./lib/index.js" ]
