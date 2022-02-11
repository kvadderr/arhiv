const {
    get
  } = require("./report.service");

  
  module.exports = {
 
    getDocument: (req, res) => {
       get((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json(results);
        });
    }
    
  };