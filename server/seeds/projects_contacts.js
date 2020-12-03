const projectData = require("../seeddata/project");
const contactData = require("../seeddata/contact");
const imageData = require("../seeddata/images");
const { map } = require("../seeddata/images");

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
    })
    .then(async () => {
      return await knex("images")
        .del()
        .then(function () {
          return knex("projects")
            .pluck("id")
            .then((data) => data);
        });
    })
    .then((newData) => {
      const images = imageData.map((newImage) => {
        newImage["projects_id"] =
          newData[Math.floor(Math.random() * newData.length)];
        return newImage;
      });
      console.log(images);
      return knex("images").insert(images);
    });
};
