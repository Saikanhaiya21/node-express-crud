const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/mongoDatabaseUtils");

module.exports = class MongoUser {
  constructor(name, email, phone, address, age, password, country, _id) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.age = age;
    this.password = password;
    this.country = country;
    this._id = _id;
  }

  save() {
    const db = getDb();
    if (this._id) {
      const { _id, ...updatedFeilds } = this;
      return db
        .collection("mongo_users")
        .updateOne({ _id: new ObjectId(String(this._id)) }, { $set: updatedFeilds });
    } else {
      return db.collection("mongo_users").insertOne(this);
    }
  }

  static fetchAll() {
    const db = getDb();
    return db.collection("mongo_users").find().toArray();
  }

  static findById(id) {
    const db = getDb();
    return db
      .collection("mongo_users")
      .find({ _id: new ObjectId(String(id)) })
      .next();
  }

  static deleteById(id) {
    const db = getDb();
    return db
      .collection("mongo_users")
      .deleteOne({ _id: new ObjectId(String(id)) });
  }
};
