FROM node:21-alpine as builder

WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .

RUN ls -l > ls.txt
RUN cat ls.txt

RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html