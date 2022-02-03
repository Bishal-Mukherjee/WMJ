const express = require("express");
const router = express.Router();
const { getFeedbacks } = require("../controllers/users");

// desc: get client feedbacks
router.get("/getFeedbacks", getFeedbacks);

module.exports = router;
