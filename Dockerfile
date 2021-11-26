#stage 1
FROM node:latest as node
WORKDIR /src/app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /src/app/dist/srl-new /usr/share/nginx/html


