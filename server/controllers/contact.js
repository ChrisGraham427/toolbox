const Contact = require("../models/contact");

function getContact(req, res) {
  Contact.fetchAll({ withRelated: ["project"] }).then((contacts) => {
    res.status(200).json(contacts);
  });
}

function postContact(req, res) {
  console.log("request", req.body);
  new Contact({
    name: req.body.contact.name,
    company: req.body.contact.company,
    position: req.body.contact.position,
    email: req.body.contact.email,
    phone: req.body.contact.phone,
    project_id: req.body.contact.project_id,
  })
    .save()
    .then((newContact) => {
      res.status(201).json(newContact);
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
  Contact.where("id", req.params.id)
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
