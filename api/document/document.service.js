const pool = require("../../config/db");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into document(object_id, subsection_id, date, name, path, info) 
                values(?, ?, ?, ?, ?, ?)`,
      [
        data.object_id,
        data.subsection_id,
        data.date,
        data.name,
        data.path,
        data.info
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  get: (subsection, object, callBack) => {
    console.log("LOOL"+subsection);
    pool.query(
      `select * from document WHERE subsection_id=? AND object_id=?`,
      [
        subsection, 
        object
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getSingle: (id, callBack) => {
    pool.query(
      `select * from document WHERE document_id=?`,
      [
        id
      ],
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
      `update document set name=? where object_id = ?`,
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
      `delete from document where document_id = ?`,
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