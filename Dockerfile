FROM node:lts-alpine
ENV MONGO_HOST=mongodb
ENV MONGO_USER=admin
ENV MONGO_ROOT_PASSWORD=password
ENV MONGO_DATABASE=caseA
ENV user=user1
ENV password=password
WORKDIR /usr/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
RUN ls
EXPOSE 3000
RUN chown -R node /usr/app
USER node
CMD ["npm", "start"]
