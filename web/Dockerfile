FROM node:latest

WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/


# Bundle app source
COPY . /usr/src/app

RUN yarn install
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "dev" ]