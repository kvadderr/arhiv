const {
    create,
    deleteThis,
    update,
    get
  } = require("./subsection.service");

  
  module.exports = {
    createSubsection: (req, res) => {
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

    getSubsection: (req, res) => {
      const id = req.params.id;
       get(id, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json(results);
        });
    },

    updateSubsection: (req, res) => {
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

    deleteSubsection: (req, res) => {
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