const express = require("express");
const router = express.Router();
const contactController = require("../controllers/ContactController");

// Contact formuna POST isteği yönlendirme
router.post("/contact", contactController.submitContactForm);

module.exports = router;
