FROM node:alpine AS build

ENV HOME=/usr/src/app
WORKDIR ${HOME}
COPY . $HOME

RUN npm install --silent \
    && npm run build

FROM node:alpine AS production

EXPOSE 3000

ENV HOME=/usr/src/app
WORKDIR $HOME

COPY --from=build ./usr/src/app/ $HOME
COPY package.json $HOME

RUN apk update && apk upgrade \
  && npm install --silent --production \
  && npm rebuild --quiet

CMD [ "npm", "start" ]