const MongoUser = require("../models/mongoUser");

exports.fetchAll = (req, res, next) => {
  MongoUser.fetchAll()
    .then((users) => {
      res.send(users);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.addUser = (req, res, next) => {
  const { name, email, phone, address, age, password, country } = req.body;
  const user = new MongoUser(
    name,
    email,
    phone,
    address,
    age,
    password,
    country
  );
  user
    .save()
    .then(() => {
      res.status(201).json({
        message: "User created successfully!",
      });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findById = (req, res, next) => {
  MongoUser.findById(req.params.id)
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.updateById = (req, res, next) => {
  const { name, email, phone, address, age, password, country } = req.body;
  const { id } = req.params;
  const user = new MongoUser(
    name,
    email,
    phone,
    address,
    age,
    password,
    country,
    id
  );
  user.save()
    .then(() => {
      res.json({
        message: "User updated successfully!",
      });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteById = (req, res, next) => {
  const { id } = req.params;
  MongoUser.deleteById(id)
    .then(() => {
      res.json({
        message: "User deleted successfully!",
      });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
