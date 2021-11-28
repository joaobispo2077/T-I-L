FROM node:16-alpine

COPY package.json /package.json
COPY yarn.lock /yarn.lock
RUN yarn install

COPY src ./src

CMD ["yarn", "start"]
