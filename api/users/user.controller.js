const {
    create,
    getUserByUserEmail,
    getUserByUserId,
    getUserByUserLogin,
    getUsers,
    updateUser,
    deleteUser
  } = require("./user.service");

  
  module.exports = {
  
    login: (req, res) => {
      const login = req.params.login;
      const password = req.params.password;

      getUserByUserEmail(login, password, (err, results) => {
        if (err) {
          console.log(err);
        }

        if (!results) {
          return res.status(500).json({
            success: 0,
            data: "Invalid login or password"
          });
        } else {
          return res.json(results);
        }
      });
    }
  };