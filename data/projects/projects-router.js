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

module.exports = router