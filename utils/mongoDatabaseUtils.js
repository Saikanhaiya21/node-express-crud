const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

// Add Mongo Atlas url
const MONGO_URL =
  "";

// private vaiable
let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      _db = client.db("curd-operation");
      callback();
    })
    .catch((error) => {
      console.log("Error while connecting Mongo:", error);
    });
};

const getDb = () => {
  if (!_db) {
    throw new Error("Mongo not connected");
  }
  return _db;
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
