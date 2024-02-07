FROM node:20-slim

WORKDIR /backend

COPY . .

RUN corepack enable

RUN corepack prepare yarn@stable --activate

RUN yarn install

EXPOSE 8000

CMD ["yarn", "start"]
