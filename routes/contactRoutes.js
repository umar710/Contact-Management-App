const express = require("express");
const router = express.Router();
const { contactValidationRules, validate } = require("../utils/validation");
const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  searchContacts,
} = require("../controllers/contactController");

// Define the search route BEFORE the :id route
router.get("/search", searchContacts);

// GET /contacts
router.get("/", getAllContacts);

// GET /contacts/:id
router.get("/:id", getContactById);

// POST /contacts
router.post("/", contactValidationRules(), validate, createContact);

// PUT /contacts/:id
router.put("/:id", contactValidationRules(), validate, updateContact);

// DELETE /contacts/:id
router.delete("/:id", deleteContact);

module.exports = router;
