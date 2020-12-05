const bookshelf = require("../bookshelf");

const Contact = bookshelf.model("Contact", {
  tableName: "contacts",
  project: function () {
    return this.belongsTo("Project");
  },
});

module.exports = Contact;
