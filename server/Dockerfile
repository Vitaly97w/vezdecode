FROM node:16.13.0-alpine

WORKDIR /usr/src/app

#чтобы не копировать node_module делаем копирование сначла только этих файлов
COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 5000
CMD ["npm", "run", "dev"]