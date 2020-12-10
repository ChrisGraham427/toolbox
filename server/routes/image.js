const express = require("express");
const imageController = require("../controllers/image");
const router = express.Router();
const multer = require("multer");
const path = require("path");
// get all images
router.route("/").get(imageController.getImage);

// post a new contact

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const newFileName = `${req.body.title}${path.extname(file.originalname)}`;
    cb(null, newFileName);
  },
});

const upload = multer({ storage });

router
  .route("/")
  .post(upload.single(`selectedFile`), imageController.postImage);

// get contact by id
router.route("/:id").get(imageController.getImageById);

// delete contact by id
router.route("/:id").delete(imageController.delImage);

module.exports = router;
