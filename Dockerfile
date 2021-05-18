FROM node:14-slim

WORKDIR /app 

COPY package.json /app 

COPY yarn.lock /app

RUN yarn install 

COPY . /app 

CMD npm start
