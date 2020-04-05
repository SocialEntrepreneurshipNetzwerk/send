FROM node:10 AS base

FROM base AS builder
WORKDIR /build

COPY package*.json /build/
RUN set -ex; npm ci && npm run build
COPY . .


FROM base AS server

ARG APP_ROOT=/app
ENV APP_ROOT=${APP_ROOT}

WORKDIR ${APP_ROOT}/

COPY --from=builder /build/server/package*.json ${APP_ROOT}/server/
RUN cd server && npm ci

COPY --from=builder /build/build/ ${APP_ROOT}/build
COPY --from=builder /build/server/ ${APP_ROOT}/server

WORKDIR ${APP_ROOT}/server

CMD node .
