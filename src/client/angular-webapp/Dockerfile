FROM node AS build
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build -- --configuration production

FROM nginx AS final
COPY angular-webapp.nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/angular-webapp/* /usr/share/nginx/html/
