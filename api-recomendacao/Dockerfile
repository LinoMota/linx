FROM node:12.19.0-buster

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE $API_RECOMENDACAO_PORT

CMD ["npm", "start"]