FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install -g serve

RUN npm install -f

COPY . .

EXPOSE 3000

# CMD [ "npm", "start"]
CMD ["npm", "run", "serve"]