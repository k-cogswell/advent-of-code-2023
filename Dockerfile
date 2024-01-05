FROM node:21-alpine

WORKDIR /user/src/app

RUN npm install

EXPOSE 9001