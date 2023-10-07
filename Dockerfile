FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV TOKEN_SECRET=9f26e402586e2faa8da4c98a35f1b20d6b033c60
ENV REFRESH_TOKEN_SECRET=9f26e402586e2faa8da4c98a35f1b20d6b033c61
ENV MONGODB_URI=mongodb://mongodb/docker


CMD ["npm", "run", "dev"]
