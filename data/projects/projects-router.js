const express = require("express")
const projectsModel = require("./projects-model")
// const db = require("../db-config")

const router = express.Router()

// get all projects
router.get("/projects", async (req, res, next) => {
    try {
        const projectList = await projectsModel.getProjects()
        for(let i = 0; i < projectList.length; i ++) {
            if(projectList[i].completed === 0) {
                projectList[i].completed = false;
            } else {
                projectList[i].completed = true;
            }
        }
        res.json(projectList)
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
        const taskList = await projectsModel.getTasks(id)
        for(let i = 0; i < taskList.length; i ++) {
            if(taskList[i].completed === 0) {
                taskList[i].completed = false;
            } else {
                taskList[i].completed = true;
            }
        }
        res.json(taskList)
    }
    catch(err) {
        next(err)
    }
})

// add task
router.post("/tasks", async (req, res, next) => {
    try {
        const newTask = await projectsModel.addTask(req.body)
        res.status(201).json(newTask)
    }
    catch(err) {
        next(err)
    }
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

// add resource
router.post("/resources", async (req, res, next) => {
    try {
        const newResource = await projectsModel.addResource(req.body)
        res.status(201).json(newResource)
    }
    catch(err) {
        next(err)
    }
})

module.exports = router