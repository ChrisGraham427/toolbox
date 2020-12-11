const Task = require("../models/task");

function getTask(req, res) {
  Task.fetchAll({ withRelated: ["project"] }).then((tasks) => {
    res.status(200).json(tasks);
  });
}

function postTask(req, res) {
  console.log("request", req.body);
  new Task({
    category: req.body.task.category,
    task: req.body.task.task,
    description: req.body.task.description,
    project_id: req.body.task.project_id,
  })
    .save()
    .then((newTask) => {
      res.status(201).json(newTask);
    })
    .catch((err) => console.error(err));
}

function getTaskByProjectId(req, res) {
  Task.where("id", req.params.projects_id)
    .fetch({ withRelated: ["projects"] })
    .then((task) => {
      res.status(200).json(task);
    });
}

function updateTask(req, res) {
  Task.where("id", req.params.id)
    .fetch()
    .then((task) => {
      task
        .save({
          category: req.body.category ? req.body.category : task.category,
          task: req.body.task ? req.body.task : task.task,
          description: req.body.description
            ? req.body.description
            : task.description,
          projects_id: req.body.projects_id
            ? req.body.projects_id
            : task.projects_id,
          categories: JSON.stringify(req.body.categories)
            ? JSON.stringify(req.body.categories)
            : task.categories,
        })
        .then((updatedTask) => {
          res.status(200).json({ updatedTask });
        });
    });
}

function delTask(req, res) {
  Task.where("id", req.params.id)
    .destroy()
    .then((deletedTask) => {
      res.status(200).json({ deletedTask });
    });
}

module.exports = {
  getTask,
  postTask,
  getTaskByProjectId,
  updateTask,
  delTask,
};
