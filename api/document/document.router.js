const router = require("express").Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});  

const fileFilter = (req, file, cb) => {
    cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: fileFilter,});

const {
  createDocument,
  getDocument,
  deleteDocument,
  updateDocument,
  getSingleDocument
} = require("./document.controller");
router.get("/subsection/:subsection/object/:object",  getDocument);
router.get("/id/:id",  getSingleDocument);
router.post("/", upload.single("path"), createDocument);
router.post("/update", upload.single("path"),  updateDocument);
router.delete("/",  deleteDocument);

module.exports = router;