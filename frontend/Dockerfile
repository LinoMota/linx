FROM node:12.19.0-buster

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm run build

EXPOSE 3333

CMD ["npm", "start"]