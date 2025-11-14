const express = require("express");
const router = express.Router();

const { Contactusadd, Contactusget, Contactusdelete } = require("../controller/contactus");

// Add new contact message
router.post("/add", Contactusadd);

// Get all contact messages
router.get("/get", Contactusget);

// Delete message
router.delete("/delete/:id", Contactusdelete);

module.exports = router;
