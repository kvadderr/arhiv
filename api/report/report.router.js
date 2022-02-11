const router = require("express").Router();

const {
    getDocument
} = require("./report.controller");
router.get("/",  getDocument);

module.exports = router;