const express = require("express")
const projectsModel = require("./projects-model")
// const db = require("../db-config")

const router = express.Router()

// get all projects
router.get("/projects", async (req, res, next) => {
    try {
        res.json(await projectsModel.getProjects())
    }
    catch(err) {
        next(err)
    }
})

// add a project
router.post("/projects", async (req, res, next) => {
    try {
        const newProject = await projectsModel.addProject(req.body)
        res.status(201).json(newProject)
    }
    catch(err) {
        next(err)
    }
})

// get tasks
router.get("/tasks", async (req, res, next) => {
    try {
        res.json(await projectsModel.getTasks())
    }
    catch(err) {
        next(err)
    }
})

module.exports = router