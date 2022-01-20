FROM node:14

WORKDIR /nodejs-clean-a
COPY package.json .
RUN npm install
COPY . .
CMD npm start