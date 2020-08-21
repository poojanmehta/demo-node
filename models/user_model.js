var db = require("../dbconnection");
var user = {
  addUser: function (item, callback) {
    return db.query(
      "insert into user_tbl (first_name,last_name,email,dob,user_bio) values (?,?,?,?,?)",
      [item.first_name, item.last_name, item.email, item.dob, item.user_bio],
      callback
    );
  },

  getAllUsers: function (callback) {
    return db.query("select * from user_tbl", callback);
  },

  updateUser: function (user_id, item, callback) {
    return db.query(
      "update user_tbl set first_name=?,last_name=?,email=?,dob=?,user_bio=? where user_id=?",
      [
        item.first_name,
        item.last_name,
        item.email,
        item.dob,
        item.user_bio,
        user_id,
      ],
      callback
    );
  },

  deleteUser: function (user_id, callback) {
    return db.query(
      "delete from user_tbl where user_id=?",
      [user_id],
      callback
    );
  },

  getUserById: function (user_id, callback) {
    return db.query(
      "select * from user_tbl where user_id=?",
      [user_id],
      callback
    );
  },
};

module.exports = user;
