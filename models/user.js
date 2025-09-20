const db = require('../utils/databaseUtils');

module.exports = class User {
  constructor(name, email, phone, address, age, password, country, id){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.age = age;
    this.password = password;
    this.country = country;
    this.id = id;
  }


  save(){
    if(this.id){
      return db.execute(`UPDATE users SET name = ?, email = ?, phone = ?, address = ?, age = ?, password = ?, country = ? WHERE id = ?`, [this.name, this.email, this.phone, this.address, this.age, this.password, this.country, this.id]);
    }else{
      return db.execute(`INSERT INTO users (name, email, phone, address, age, password, country) VALUES (?, ?, ?, ?, ?, ?, ?)`, [this.name, this.email, this.phone, this.address, this.age, this.password, this.country]);
    }
  }

  static getAllUsers(){
    return db.execute('SELECT * FROM users');
  }

  static getUserById(id){
    return db.execute('SELECT * FROM users WHERE id=?', [id]);
  }

  static deleteUserById(id){
    return db.execute('DELETE FROM users WHERE id=?', [id]);
  }
}