FROM mongo:latest
ENV MONGO_INITDB_ROOT_USERNAME admin
ENV MONGO_INITDB_ROOT_PASSWORD password
ENV MONGO_INITDB_DATABASE caseA
COPY ./mongo-init.js /docker-entrypoint-initdb.d/
RUN chmod -R 755 /docker-entrypoint-initdb.d/


VOLUME mongo-data:/data/db
EXPOSE 27017 27017

# CMD ["/docker-entrypoint-initdb.d/mongo-init.js" ]