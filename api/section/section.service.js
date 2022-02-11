const pool = require("../../config/db");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into section(name) 
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
      `select * from section`,
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
      `update section set name=? where section_id = ?`,
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
      `delete from section where section_id = ?`,
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