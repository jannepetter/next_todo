FROM node:slim

WORKDIR /app

COPY . .
WORKDIR /app/todo
RUN npm ci && npm cache clean --force

EXPOSE 3000

RUN npm run build

CMD ["npm","start"]