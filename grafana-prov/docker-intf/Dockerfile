FROM node:20.12.1 AS base

WORKDIR /app

FROM base AS builder

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY ./src ./src

RUN npm run build

FROM builder AS production

COPY --from=builder /app/dist/bundle.cjs .

EXPOSE 3861

CMD [ "node", "./bundle.cjs" ]
