const bookshelf = require("../bookshelf");

const Image = bookshelf.model("Image", {
  tableName: "images",
  inventories: function () {
    return this.hasMany("Project");
  },
});

module.exports = Image;
