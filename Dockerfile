FROM node:10 AS base

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

FROM base AS builder
WORKDIR /build

COPY package*.json /build/
RUN set -ex; npm ci
COPY . .
RUN npm run build


FROM base AS server

ARG APP_ROOT=/app
ENV APP_ROOT=${APP_ROOT}

WORKDIR ${APP_ROOT}/

COPY --from=builder /build/server/package.json ${APP_ROOT}/server/
COPY --from=builder /build/server/package-lock.json ${APP_ROOT}/server/
RUN cd server && npm ci

COPY --from=builder /build/public/ ${APP_ROOT}/public
COPY --from=builder /build/server/ ${APP_ROOT}/server
COPY --from=builder /build/src ${APP_ROOT}/src

WORKDIR ${APP_ROOT}/server

CMD node .
