const pool = require("../../config/db");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into subsection(section_id, name) 
                values(?,?)`,
      [
        data.id,
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
  get: (id, callBack) => {
    pool.query(
      `select * from subsection where section_id = ?`,
      [id],
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
      `update subsection set name=? where subsection_id = ?`,
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
      `delete from subsection where subsection_id = ?`,
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