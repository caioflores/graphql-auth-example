FROM node:11-alpine
EXPOSE 3000
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . .
CMD ["./node_modules/.bin/sequelize", "db:create"]
CMD ["yarn", "start"]
