const router = require("express").Router();
const {
  createObject,
  getObject,
  deleteObject,
  updateObject
} = require("./objects.controller");
router.get("/",  getObject);
router.post("/",  createObject);
router.patch("/update",  updateObject);
router.delete("/",  deleteObject);

module.exports = router;