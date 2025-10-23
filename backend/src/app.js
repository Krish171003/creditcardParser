require("dotenv").config();
const express = require("express");
const cors = require("cors");
const statementRoutes = require("./routes/statementRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/statements", statementRoutes);
app.use(errorHandler);

module.exports = app;
