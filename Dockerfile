FROM nginx:alpine
WORKDIR /app
ADD package*.json .
RUN yarn install 
ADD . .
CMD vite