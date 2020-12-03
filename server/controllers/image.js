const Image = require("../models/image");

function getImage(req, res) {
  Image.where(req.query)
    .fetchAll({ withRelated: ["project"] })
    .then((images) => {
      res.status(200).json(images);
    });
}

function postImage(req, res) {
  new Image({
    source: req.body.source,
    description: req.body.description,
    alt: req.body.alt,
    project_id: req.body.project_id,
    categories: JSON.stringify(req.body.categories),
  })
    .save()
    .then((newImage) => {
      res.status(201).json({ newImage });
    })
    .catch((err) => console.error(err));
}

function getByIdbyImage(req, res) {
  Image.where("id", req.params.id)
    .fetch({ withRelated: ["projects"] })
    .then((image) => {
      res.status(200).json(image);
    });
}

function delImage(req, res) {
  Project.where("id", req.params.id)
    .destroy()
    .then((deletedImage) => {
      res.status(200).json({ deletedImage });
    });
}

module.exports = {
  getImage,
  postImage,
  getByIdbyImage,
  delImage,
};
