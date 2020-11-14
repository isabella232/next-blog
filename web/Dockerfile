FROM node:latest

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN yarn install

# Copying source files
COPY . .

# Building app
RUN yarn build

EXPOSE 8080

# Running the app
CMD [ "npx", "next", "start", "-p", "8080" ]
