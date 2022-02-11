const {
    create,
    deleteThis,
    update,
    get
  } = require("./section.service");

  
  module.exports = {
    createSection: (req, res) => {
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

    getSection: (req, res) => {
       get((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json(results);
        });
    },

    updateSection: (req, res) => {
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

    deleteSection: (req, res) => {
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