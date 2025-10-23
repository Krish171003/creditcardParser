const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  date: String,
  description: String,
  type: String,
  amount: String,
});

const statementSchema = new mongoose.Schema({
  issuer: String,
  card_last4: String,
  variant: String,
  billing_cycle: String,
  payment_due: String,
  total_balance: String,
  transactions: [transactionSchema],
});

module.exports = mongoose.model("Statement", statementSchema);
