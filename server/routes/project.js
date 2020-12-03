const express = require("express");
const projectController = require("../controllers/project");
const router = express.Router();

// get all projects
router.route("/").get(projectController.get);

// post a new project
router.route("/project").post(projectController.post);

// get project by id
router.route("/:id").get(projectController.getById);

// update project
router.route("/:id").put(projectController.update);

// delete project by id
router.route("/:id").delete(projectController.del);

module.exports = router;
