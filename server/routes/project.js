const express = require("express");
const projectController = require("../controllers/project");
const router = express.Router();

// get all projects
router.route("/").get(projectController.getProject);

// post a new project
router.route("/project").post(projectController.postProject);

// get project by id
router.route("/:id").get(projectController.getByIdbyProject);

// update project
router.route("/:id").put(projectController.updateProject);

// delete project by id
router.route("/:id").delete(projectController.delProject);

module.exports = router;
