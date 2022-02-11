const pool = require("../../config/db");

module.exports = {
  get: callBack => {
    pool.query(
      `SELECT subsection.name AS 'Раздел', document.date AS 'Дата добавления', document.name AS 'Название документы', document.info AS 'Краткое описание', object.name AS 'Объект' FROM document, object, subsection WHERE document.subsection_id = subsection.subsection_id AND document.object_id = object.object_id`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};