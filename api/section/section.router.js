const router = require("express").Router();
const {
  createSection,
  getSection,
  deleteSection,
  updateSection
} = require("./section.controller");
router.get("/",  getSection);
router.post("/",  createSection);
router.patch("/update",  updateSection);
router.delete("/",  deleteSection);

module.exports = router;