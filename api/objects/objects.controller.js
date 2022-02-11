const {
    create,
    deleteThis,
    update,
    get
  } = require("./objects.service");

  
  module.exports = {
    createObject: (req, res) => {
        const body = req.body;
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

    getObject: (req, res) => {
       get((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json(results);
        });
    },

    updateObject: (req, res) => {
        const body = req.body;
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

    deleteObject: (req, res) => {
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