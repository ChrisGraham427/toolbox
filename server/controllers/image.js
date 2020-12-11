const Image = require("../models/image");

function getImage(req, res) {
  Image.fetchAll().then((images) => {
    res.status(200).json(images);
  });
}

function postImage(req, res) {
  console.log("POST IMAGE", req.body, req.file);
  new Image({
    source: `http://localhost:8080/image/images/${req.file.filename}`,
    description: req.body.description,
    alt: req.body.title,
    project_id: req.body.project_id,
  })
    .save()
    .then((newImage) => {
      res.status(201).json(newImage);
    })
    .catch((err) => console.error(err));
}

function getImageById(req, res) {
  Image.where("id", req.params.id)
    .fetch({ withRelated: ["projects"] })
    .then((image) => {
      res.status(200).json(image);
    });
}

function delImage(req, res) {
  Image.where("id", req.params.id)
    .destroy()
    .then((deletedImage) => {
      res.status(200).json(deletedImage);
    });
}

module.exports = {
  getImage,
  postImage,
  getImageById,
  delImage,
};
