const express = require("express");
const taskController = require("../controllers/task");
const router = express.Router();

// get all tasks
router.route("/").get(taskController.getTask);

// post a new task
router.route("/").post(taskController.postTask);

// get task by id
router.route("/:id").get(taskController.getTaskByProjectId);

// update task
router.route("/:id").put(taskController.updateTask);

// delete task by id
router.route("/:id").delete(taskController.delTask);

module.exports = router;
