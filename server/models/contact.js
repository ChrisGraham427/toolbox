const bookshelf = require("../bookshelf");

const Contact = bookshelf.model("Contact", {
  tableName: "contacts",
  inventories: function () {
    return this.hasMany("Project");
  },
});

module.exports = Contact;
