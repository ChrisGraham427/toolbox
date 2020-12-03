const bookshelf = require("../bookshelf");

const Project = bookshelf.model("Project", {
  tableName: "projects",
  inventories: function () {
    return this.hasMany("Contact");
  },
});

module.exports = Project;
