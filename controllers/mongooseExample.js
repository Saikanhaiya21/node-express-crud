const MongooseUsers = require("../models/mongooseExample");

exports.fetchAll = (req, res, next) => {
  MongooseUsers.find()
    .then((users) => {
      res.send(users);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.addUser = (req, res, next) => {
  const { name, email, phone, address, age, password } = req.body;
  const user = new MongooseUsers({
    name,
    email,
    phone,
    address,
    age,
    password,
  });
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
  MongooseUsers.findById(req.params.id)
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.updateById = (req, res, next) => {
  const { name, email, phone, address, age, password, country } = req.body;
  MongooseUsers.findById(req.params.id)
    .then((user) => {
      user.name = name;
      user.email = email;
      user.phone = phone;
      user.address = address;
      user.age = age;
      user.password = password;
      user
        .save()
        .then(() => {
          res.json({
            message: "User updated successfully!",
          });
        })
        .catch((error) => {
          res.status(500).json(error);
        });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteById = (req, res, next) => {
  const { id } = req.params;
  MongooseUsers.findByIdAndDelete(id)
    .then(() => {
      res.json({
        message: "User deleted successfully!",
      });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
