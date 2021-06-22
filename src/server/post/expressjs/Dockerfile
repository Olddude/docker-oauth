FROM node
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE ${HTTP_PORT}
ENTRYPOINT ["node", "index.js"]
