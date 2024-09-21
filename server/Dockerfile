FROM node:20.12.1 AS installer

WORKDIR /app

COPY package*.json .

RUN npm ci && npm cache clean --force

FROM installer AS development

CMD [ "npm", "run", "dev" ]

FROM installer AS builder

RUN npm run build

FROM builder AS production

CMD [ "npm", "run", "start" ]
