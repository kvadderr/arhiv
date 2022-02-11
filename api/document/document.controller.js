const {
    create,
    deleteThis,
    update,
    get,
    getSingle
  } = require("./document.service");

  
  module.exports = {
    createDocument: (req, res) => {
        const body = req.body;
        body.path = req.file.path;
        create(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection errror"
            });
          }
          return res.status(200).json({
            success: 1,
            data: results
          });
        });
    },

    getDocument: (req, res) => {
      const subsection = req.params.subsection;
      const object = req.params.object;
       get(subsection, object, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json(results);
        });
    },

    getSingleDocument: (req, res) => {
      const id = req.params.id;
       getSingle(id, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json(results);
        });
    },

    updateDocument: (req, res) => {
        const id = req.params.id;
        body.path = req.file.path;
        update(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection errror"
            });
          }
          return res.status(200).json({
            success: 1,
            data: results
          });
        });
    },

    deleteDocument: (req, res) => {
        const body = req.body;
        deleteThis(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection errror"
            });
          }
          return res.status(200).json({
            success: 1,
            data: results
          });
        });
    }
   
    
  };