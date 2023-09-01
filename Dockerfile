FROM node:16.18-alpine as base

RUN npm i -g pnpm

FROM base as build

WORKDIR /App

COPY package.json .
COPY pnpm-lock.yaml .
COPY . .

RUN pnpm install
RUN pnpm run build

FROM nginx:stable as runtime

COPY --from=build /App/dist/portofolio /usr/share/nginx/html
