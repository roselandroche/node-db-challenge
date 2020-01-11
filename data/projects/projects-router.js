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

// get project by id
router.get("/projects/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const project = await projectsModel.getProjectById(id)

        if (project) {
            res.json(project)
        } else {
            res.status(404).json({ message: "Project does not exist"})
        }
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

// get tasks by id
router.get("/tasks/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        res.json(await projectsModel.getTasks(id))
    }
    catch(err) {
        next(err)
    }
})

// add task
router.post("/tasks/:id", (req, res, next) => {
    const newTask = req.body;
    const { id } = req.params;

    projectsModel.getProjectById(id)
    .then(project => {
        if(project) {
            projectsModel.addTask(newTask, id)
            .then(addedTask => {
                res.status(201).json(addedTask)
            })
        } else {
            res.status(404).json({message: "Invalid project"})
        }
    })
    .catch(err => {
        next(err)
    })
})

// get resources by id
router.get("/resources/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        res.json(await projectsModel.getResources(id))
    }
    catch(err) {
        next(err)
    }
})

module.exports = router