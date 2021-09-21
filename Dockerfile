FROM node

WORKDIR /home/app

COPY package.json /home/app
COPY package-lock.json /home/app

RUN npm install --force

COPY . /home/app

EXPOSE 3333
CMD ["npm","run","dev"]