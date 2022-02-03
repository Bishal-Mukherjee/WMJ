const { GoogleSpreadsheet } = require("google-spreadsheet");
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID);

exports.emailSubmissions = async (req, res) => {
  const { pin, email } = req.body;
  await doc.useServiceAccountAuth({
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY,
  });

  const date = new Date();

  // load the document info
  await doc.loadInfo();

  // Index of the sheet
  let sheet = doc.sheetsByIndex[1];
  await sheet.addRow({
    PIN: pin,
    EMAIL: email,
    DATE: date.toISOString().split("T")[0].split("-").reverse().join("/"),
  });
  res.status(200).json({ message: "SUCCESS" });
};
