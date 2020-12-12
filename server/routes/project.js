const express = require("express");
const projectController = require("../controllers/project");
const router = express.Router();

// update project
router.route("/update/:id").put(projectController.updateProject);

// get project by id
router.route("/:id").get(projectController.getProjectById);

// delete project by id
router.route("/:id").delete(projectController.delProject);
// get all projects
router.route("/").get(projectController.getProject);

// post a new project
router.route("/").post(projectController.postProject);

module.exports = router;
