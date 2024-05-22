FROM node:20

WORKDIR /app

COPY package.json index.js /app/

CMD ["node", "index.js"]