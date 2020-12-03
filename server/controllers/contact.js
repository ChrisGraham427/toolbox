const Contact = require("../models/contact");

function getContact(req, res) {
  Contact.where(req.query)
    .fetchAll({ withRelated: ["project"] })
    .then((contacts) => {
      res.status(200).json(contacts);
    });
}

function postContact(req, res) {
  new Contact({
    name: req.body.name,
    company: req.body.company,
    position: req.body.position,
    email: req.body.email,
    phone: req.body.phone,
    projects_id: req.body.projects_id,
    categories: JSON.stringify(req.body.categories),
  })
    .save()
    .then((newContact) => {
      res.status(201).json({ newContact });
    })
    .catch((err) => console.error(err));
}

function getContactByProjectId(req, res) {
  Contact.where("id", req.params.projects_id)
    .fetch({ withRelated: ["projects"] })
    .then((contact) => {
      res.status(200).json(contact);
    });
}

function updateContact(req, res) {
  Contact.where("id", req.params.id)
    .fetch()
    .then((contact) => {
      contact
        .save({
          name: req.body.name ? req.body.name : contact.name,
          company: req.body.company ? req.body.company : contact.company,
          position: req.body.position ? req.body.position : contact.position,
          email: req.body.email ? req.body.email : contact.email,
          phone: req.body.phone ? req.body.phone : contact.phone,
          projects_id: req.body.projects_id
            ? req.body.projects_id
            : contact.projects_id,
          categories: JSON.stringify(req.body.categories)
            ? JSON.stringify(req.body.categories)
            : contact.categories,
        })
        .then((updatedContact) => {
          res.status(200).json({ updatedContact });
        });
    });
}

function delContact(req, res) {
  Project.where("id", req.params.id)
    .destroy()
    .then((deletedContact) => {
      res.status(200).json({ deletedContact });
    });
}

module.exports = {
  getContact,
  postContact,
  getContactByProjectId,
  updateContact,
  delContact,
};
