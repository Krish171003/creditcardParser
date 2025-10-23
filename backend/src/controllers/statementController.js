const pdfParser = require("../utils/pdfParser");
const Statement = require("../models/Statement");

exports.parseStatement = async (req, res, next) => {
  try {
    const pdfBuffer = req.file.buffer;
    const data = await pdfParser(pdfBuffer);
    const statement = new Statement(data);
    await statement.save();
    res.status(200).json(statement);
  } catch (err) {
    next(err);
  }
};

exports.getStatement = async (req, res, next) => {
  try {
    const st = await Statement.findById(req.params.id);
    if (!st) return res.status(404).json({ message: "Not found" });
    res.json(st);
  } catch (err) {
    next(err);
  }
};
