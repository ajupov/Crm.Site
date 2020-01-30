FROM node:lts-alpine as build
WORKDIR /app

COPY . ./

RUN yarn
RUN yarn build-prod

FROM nginx:1.17.6-alpine
WORKDIR /var/www/app
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/
