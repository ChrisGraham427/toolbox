const express = require("express");
const contactController = require("../controllers/contact");
const router = express.Router();

// get all contacts
router.route("/").get(contactController.getContact);

// post a new contact
router.route("/contact").post(contactController.postContact);

// get contact by id
router.route("/:id").get(contactController.getContactByProjectId);

// update contact
router.route("/:id").put(contactController.updateContact);

// delete contact by id
router.route("/:id").delete(contactController.delContact);

module.exports = router;
