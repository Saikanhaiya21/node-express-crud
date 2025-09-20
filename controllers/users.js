const User = require('../models/user');

exports.getAllUsers = (req, res, next) => {
  User.getAllUsers()
  .then(([users]) => {
    res.send(users);
  })
  .catch(error => {
    res.status(500).json(error);
  });
}

exports.postAddUser = (req, res, next) => {
  const {name, email, phone, address, age, password, country} = req.body;
  const user = new User(name, email, phone, address, age, password, country);
  user.save()
  .then(([user]) => {
    res.status(201).json({
      message: 'User created successfully!'
    });
  })
  .catch(error => {
    res.status(500).json(error);
  });
}

exports.getUserById = (req, res, next) => {
  User.getUserById(req.params.id)
  .then(([user]) => {
    res.send(user);
  })
  .catch(error => {
    res.status(500).json(error);
  });
}

exports.updateUserById = (req, res, next) => {
  const { name, email, phone, address, age, password, country } = req.body;
  const { id } = req.params;
  const user = new User(name, email, phone, address, age, password, country, id);
  user.save()
  .then(([user]) => {
    res.json({
      message: 'User updated successfully!'
    });
  })
  .catch(error => {
    res.status(500).json(error);
  });
}

exports.deleteUserById = (req, res, next) => {
  const { id } = req.params;
  User.deleteUserById(id)
  .then(([user]) => {
    res.json({
      message: 'User deleted successfully!'
    });
  })
  .catch(error => {
    res.status(500).json(error);
  })
}