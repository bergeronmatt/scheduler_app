FROM node:16-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 8080

# CMD [ "npm", "run", "dev"]
CMD ["npm", "run", "start"]