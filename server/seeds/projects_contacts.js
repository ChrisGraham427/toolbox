const projectData = require("../seeddata/project");
const contactData = require("../seeddata/contact");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert(projectData);
    })
    .then(() => {
      return knex("contacts")
        .del()
        .then(function () {
          // Inserts seed entries
          return knex("contacts").insert(contactData);
        });
    });
};
