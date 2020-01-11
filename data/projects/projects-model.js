const db = require("../db-config")

function getResources(project_id) {
    
}

function addResource() {

}

function getProjects() {
    return db("projects").first()
}

async function addProject(newProject) {
    const [id] = await db("projects").insert(newProject)
    return db("projects").where({ id }).first()
}

function getTasks(project_id) {
    
}

function addTask() {

}

module.exports = {
    getResources,
    addResource,
    getProjects,
    addProject,
    getTasks,
    addTask,
}