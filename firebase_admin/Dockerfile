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
RUN echo "Docker file executed"
CMD [ "node", "lib/index.js" ]


