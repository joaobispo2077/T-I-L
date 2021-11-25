FROM node:16-alpine

COPY package.json /package.json
COPY yarn.lock /yarn.lock
COPY src /src

RUN yarn install

CMD ["yarn", "start"]
