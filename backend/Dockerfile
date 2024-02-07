FROM node:20-slim

WORKDIR /backend

COPY . .

RUN yarn install

EXPOSE 8000

CMD ["yarn", "start"]
