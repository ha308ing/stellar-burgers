FROM node:lts-alpine AS source
WORKDIR /src
COPY . .
RUN npm install
RUN npm run build

FROM nginx
# COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=source src/build /usr/share/nginx/html
