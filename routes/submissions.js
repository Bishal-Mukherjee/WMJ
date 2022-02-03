const express = require("express");
const router = express.Router();
const { emailSubmissions } = require("../controllers/submissions");

// desc: submit emails for intrested users
router.post("/emailSubmission", emailSubmissions);

module.exports = router;
