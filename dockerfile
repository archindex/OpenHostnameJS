FROM node:alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json app.js /usr/src/app/
COPY . /usr/src/app
RUN npm install express os ejs body-parser
RUN npm install



EXPOSE 3000
CMD [ "npm" , "start" ]