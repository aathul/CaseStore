var mongoose = require("mongoose");

const getConnectionString = (connection) => {
  const HOST = connection
    ? connection.host || process.env.MONGO_HOST
    : process.env.MONGO_HOST;
  const USER = connection
    ? connection.user || process.env.MONGO_USER
    : process.env.MONGO_USER;
  const PASS = connection
    ? connection.password || process.env.MONGO_ROOT_PASSWORD
    : process.env.MONGO_ROOT_PASSWORD;
  const DB = connection
    ? connection.database || process.env.MONGO_DATABASE
    : process.env.MONGO_DATABASE;
  const PORT = connection
    ? connection.port || process.env.MONGO_PORT || 27017
    : process.env.MONGO_PORT || 27017;

  const connectionString = `mongodb://${USER}:${PASS}@${HOST}:${PORT}/${DB}`;
  console.log("connectionString.....", connectionString);
  return connectionString;
};

const connect = (connection) => {
  const connectionString = getConnectionString(connection);

  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("DB Connection Successfully"))
    .catch((error) => console.log(error));
  mongoose.connection.on("error", (err) => {
    console.log(err);
  });
};

const mongo = {
  connect: connect,
};

module.exports = mongo;
