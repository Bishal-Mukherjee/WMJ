const express = require("express");
const router = express.Router();
const {
  getCarouselImages,
  getCollectionImages,
} = require("../controllers/products");

// desc: get carousel images
router.get("/carouselImages", getCarouselImages);

// desc: get collection images
router.get("/collectionImages", getCollectionImages);

module.exports = router;
