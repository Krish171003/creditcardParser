const pdfParse = require("pdf-parse");

function extractTransactions(text) {
  // Multiple patterns for transactions
  const patterns = [
    /(\d{8})\s+([A-Z\d\- ]+?)\s+([\d,\.]+)\s*(Cr|Dr)?/g,
    /(\d{2}-[A-Za-z]{3}-\d{4})\s+([\w\s\-]+?)(?:\s+)?([\d,\.]+)\s*(Cr|Dr)?/g,
    /(\d{8})\s*([\w\s\-,\.]+)\s*([\d,\.]+)\s*(Cr|Dr)?/g,
  ];
  let transactions = [];
  patterns.forEach((reg) => {
    let m;
    while ((m = reg.exec(text)) != null) {
      if (m[1] && m[2] && m[3]) {
        transactions.push({
          date: m[1],
          description: m[2]?.trim(),
          amount: m[3],
          type: m[4] || "",
        });
      }
    }
  });
  return transactions;
}

module.exports = async (buffer) => {
  const result = await pdfParse(buffer);
  const text = result.text;

  // Extract fields (improved regex for multiple samples)
  const issuerMatch = /Kotak|HDFC|SBI|Axis|ICICI/i.exec(text);
  const issuer = issuerMatch ? issuerMatch[0] : "Unknown";

  const last4Match =
    /Primary Card Number\s*\d{4}\s*X+X+\s*X+X+\s*(\d{4})/i.exec(text);
  const card_last4 = last4Match ? last4Match[1] : "";

  const variantMatch = /(Visa|MasterCard|Platinum|Classic|Signature)/i.exec(
    text
  );
  const variant = variantMatch ? variantMatch[0] : "";

  const billing = /Statement Date\s*([0-9]{2}-[A-Za-z]{3}-[0-9]{4})/i.exec(
    text
  );
  const billing_cycle = billing ? billing[1] : "";

  const paymentDueMatch =
    /Remember to Pay By\s*([0-9]{2}-[A-Za-z]{3}-[0-9]{4}|IMMEDIATE)/i.exec(
      text
    );
  const payment_due = paymentDueMatch ? paymentDueMatch[1] : "";

  const totalMatch = /Total Amount Due\s*Rs\.?\s*([\d,\.]+)/i.exec(text);
  const total_balance = totalMatch ? totalMatch[1] : "";

  // Multi-format transaction extraction
  const transactions = extractTransactions(text);

  return {
    issuer,
    card_last4,
    variant,
    billing_cycle,
    payment_due,
    total_balance,
    transactions,
  };
};
