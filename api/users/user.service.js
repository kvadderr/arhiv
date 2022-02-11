const pool = require("../../config/db");

module.exports = {
  

  getUserByUserEmail: (login, password, callBack) => {
    pool.query(
      `select * from users where role = ? AND pass = ?`,
      [
        login,
        password
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};