const bookshelf = require("../bookshelf");

const Task = bookshelf.model("Task", {
  tableName: "tasks",
  project: function () {
    return this.belongsTo("Project");
  },
});

module.exports = Task;
