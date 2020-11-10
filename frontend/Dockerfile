FROM node:12.19.0-buster

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm rebuild node-sass && npm run build

EXPOSE 3333

CMD ["npm", "start"]