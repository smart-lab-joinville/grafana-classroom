FROM node:20.12.1 AS deps-installer

WORKDIR /app

COPY ./package*.json .

RUN npm ci && npm clean cache --force

FROM deps-installer AS development

CMD [ "npm", "run", "dev" ]

FROM deps-installer AS builder

RUN npm run build

FROM httpd:2.4 AS production

COPY --from=builder /app/dist /usr/local/apache2/htdocs
