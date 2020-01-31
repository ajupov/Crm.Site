FROM node:lts-alpine as build
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY public/ ./public
COPY src/ ./src
COPY tsconfig.json ./
COPY webpack.config.ts ./
RUN yarn build-prod

FROM nginx:1.17.6-alpine
WORKDIR /var/www/app

COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
