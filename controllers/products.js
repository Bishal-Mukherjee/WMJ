const { GoogleSpreadsheet } = require("google-spreadsheet");
const GOOGLE_SHEET_ID_PRODUCTS = process.env.GOOGLE_SHEET_ID_PRODUCTS;
const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID_PRODUCTS);

exports.getCarouselImages = async (req, res) => {
  await doc.useServiceAccountAuth({
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY,
  });

  // load the document info
  await doc.loadInfo();

  // Index of the sheet
  let sheet = doc.sheetsByIndex[0];
  let images = [];

  // Get all the rows
  let rows = await sheet.getRows();
  for (let i = 0; i < rows.length; i++) {
    if (parseInt(rows[i].SECTION) === 1) {
      images.push({ imageLink: rows[i].IMAGE_LINK });
    }
  }
  res.status(200).json({ images: images });
};

exports.getCollectionImages = async (req, res) => {
  await doc.useServiceAccountAuth({
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY,
  });

  // load the document info
  await doc.loadInfo();

  // Index of the sheet
  let sheet = doc.sheetsByIndex[0];
  let images = [];

  // Get all the rows
  let rows = await sheet.getRows();
  for (let i = 0; i < rows.length; i++) {
    if (parseInt(rows[i].SECTION) === 2) {
      images.push({
        imageLink: rows[i].IMAGE_LINK,
        price: rows[i].PRICE,
        revisedPrice: rows[i].REVISED_PRICE,
        stocks: rows[i].STOCKS,
        text: rows[i].TEXT,
      });
    }
  }
  res.status(200).json({ images });
};
