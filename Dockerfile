FROM node:10 AS base

FROM base AS builder
WORKDIR /app

COPY package*.json /app/
RUN set -ex ; npm ci && npm run build
COPY . /app
FROM base AS servrer

ARG APP_ROOT=/app
ENV APP_ROOT=${APP_ROOT}

WORKDIR ${APP_ROOT}

COPY --from=builder /app/server/package.json /app/server/package-lock.json ${APP_ROOT}/
RUN npm ci

COPY --from=builder /app/build/ ${APP_ROOT}/build
COPY --from=builder /app/server/ ${APP_ROOT}/server

WORKDIR ${APP_ROOT}/server

CMD node .
