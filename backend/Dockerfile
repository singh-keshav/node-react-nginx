FROM node:18.18.0-slim

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm ci

COPY . .

CMD [ "node", "index.js" ]
