const pool = require("../../config/db");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into object(name) 
                values(?)`,
      [
        data.name
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  get: callBack => {
    pool.query(
      `select * from object`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  update: (data, callBack) => {
    pool.query(
      `update object set name=? where object_id = ?`,
      [
        data.name,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteThis: (data, callBack) => {
    pool.query(
      `delete from object where object_id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};