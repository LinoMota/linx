FROM node:12.19.0-buster

WORKDIR /usr/src/app

COPY . .

RUN npm install 

EXPOSE $API_CATALOGO_PORT

CMD ["npm", "start"]