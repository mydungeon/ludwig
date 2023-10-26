FROM node:18-slim

# ENV NODE_ENV development
ENV REACT_APP_SERVER_ENDPOINT http://localhost:8000

WORKDIR /frontend

COPY . .

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]

