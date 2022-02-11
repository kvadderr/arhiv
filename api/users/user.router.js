const router = require("express").Router();
const {
  login
} = require("./user.controller");
router.get("/login/:login/password/:password", login);

module.exports = router;