const router = require("express").Router();
const {
  createSubsection,
  getSubsection,
  deleteSubsection,
  updateSubsection
} = require("./subsection.controller");
router.get("/:id",  getSubsection);
router.post("/",  createSubsection);
router.patch("/update",  updateSubsection);
router.delete("/",  deleteSubsection);

module.exports = router;