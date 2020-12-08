const Project = require("../models/project");

function getProject(req, res) {
  Project.fetchAll({ withRelated: ["contact"] }).then((project) => {
    console.log(project);
    res.status(200).json(project);
  });
}

function postProject(req, res) {
  console.log(req.body);
  new Project({
    title: req.body.project.title,
    description: req.body.project.description,
    streetNumber: req.body.project.streetNumber,
    streetName: req.body.project.streetName,
    city: req.body.project.city,
    province: req.body.project.province,
    postalCode: req.body.project.postalCode,
    contact: req.body.project.contact,
    images: req.body.project.images,
    contact: req.body.project.contact,
    startDate: req.body.project.startDate,
    endDate: req.body.project.endDate,
  })
    .save()
    .then((newProject) => {
      res.status(201).json(newProject);
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
