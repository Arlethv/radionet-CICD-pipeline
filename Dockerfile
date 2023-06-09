FROM --platform=linux/arm64/v8 node:18-alpine
WORKDIR /app
COPY . .
RUN apk update && apk add bash
RUN npm ci 
RUN npm run build
ENV NODE_ENV production
EXPOSE 3000
CMD [ "npx", "serve", "build" ]