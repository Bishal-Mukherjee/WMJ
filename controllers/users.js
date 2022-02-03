const { GoogleSpreadsheet } = require("google-spreadsheet");
const GOOGLE_SHEET_ID_PRODUCTS = process.env.GOOGLE_SHEET_ID_PRODUCTS;
const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID_PRODUCTS);

exports.getFeedbacks = async (req, res) => {
  await doc.useServiceAccountAuth({
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY,
  });

  let feedbacks = [];

  // load the document info
  await doc.loadInfo();

  let sheet = doc.sheetsByIndex[2];
  let rows = await sheet.getRows();
  for (let i = 0; i < rows.length; i++) {
    feedbacks.push({
      CLIENT: rows[i].CLIENT,
      FEEDBACK: rows[i].FEEDBACK,
      STARS: parseInt(rows[i].STARS),
    });
  }

  res.status(200).json({ feedbacks });
};
