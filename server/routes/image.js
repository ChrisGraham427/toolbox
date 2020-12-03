const express = require("express");
const imageController = require("../controllers/image");
const router = express.Router();

// get all images
router.route("/").get(imageController.getImage);

// post a new contact
router.route("/upload").post(imageController.postImage);

// get contact by id
router.route("/:id").get(imageController.getByIdbyImage);

// delete contact by id
router.route("/:id").delete(imageController.delImage);

module.exports = router;
