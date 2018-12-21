FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD gauge run --env test specs
EXPOSE 8082