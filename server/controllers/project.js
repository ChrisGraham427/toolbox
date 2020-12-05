const Project = require("../models/project");

function getProject(req, res) {
  Project.where(req.query)
    .fetchAll({ withRelated: ["contact"] })
    .then((projects) => {
      res.status(200).json({ projects });
    });
}

function postProject(req, res) {
  new Project({
    title: req.body.title,
    description: req.body.description,
    streetNumber: req.body.streetNumber,
    streetName: req.body.streetName,
    city: req.body.city,
    province: req.body.province,
    postalCode: req.body.postalCode,
    contact: req.body.contact,
    images: req.body.images,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    categories: JSON.stringify(req.body.categories),
  })
    .save()
    .then((newProject) => {
      res.status(201).json({ newProject });
    })
    .catch((err) => console.error(err));
}

function getProjectById(req, res) {
  Project.where("id", req.params.id)
    .fetch({ withRelated: ["contact"] })
    .then((project) => {
      res.status(200).json({ project });
    });
}

function updateProject(req, res) {
  Project.where("id", req.params.id)
    .fetch()
    .then((project) => {
      project
        .save({
          title: req.body.title ? req.body.title : project.title,
          description: req.body.description
            ? req.body.title
            : project.description,
          streetNumber: req.body.streetNumber
            ? req.body.streetNumber
            : project.streetNumber,
          streetName: req.body.streetName
            ? req.body.streetName
            : project.streetName,
          city: req.body.city ? req.body.city : project.city,
          province: req.body.province ? req.body.province : project.province,
          postalCode: req.body.postalCode
            ? req.body.postalCode
            : project.postalCode,
          contact: req.body.contact ? req.body.contact : project.contact,
          images: req.body.images ? req.body.images : project.images,
          startDate: req.body.startDate
            ? req.body.startDate
            : project.startDate,
          endDate: req.body.endDate ? req.body.endDate : project.endDate,
          categories: JSON.stringify(req.body.categories)
            ? JSON.stringify(req.body.categories)
            : project.categories,
        })
        .then((updatedProject) => {
          res.status(200).json({ updatedProject });
        });
    });
}

function delProject(req, res) {
  Project.where("id", req.params.id)
    .destroy()
    .then((deletedProject) => {
      res.status(200).json({ deletedProject });
    });
}

module.exports = {
  getProject,
  postProject,
  getProjectById,
  updateProject,
  delProject,
};
