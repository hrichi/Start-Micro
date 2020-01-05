# Build
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Run
FROM nginx:1.17.1-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/src/app/dist/Start-Micro-Web /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]