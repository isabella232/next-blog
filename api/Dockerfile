FROM node:latest as builder

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

FROM node:latest

RUN npm install -g serve

WORKDIR /app

COPY --from=builder /app/build .

EXPOSE 3000

CMD [ "serve", "-s", ".", "-p", "80" ]
