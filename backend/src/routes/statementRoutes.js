const express = require("express");
const router = express.Router();
const upload = require("../middlewares/fileUpload");
const {
  parseStatement,
  getStatement,
} = require("../controllers/statementController");

router.post("/upload", upload.single("pdf"), parseStatement);
router.get("/:id", getStatement);

module.exports = router;
