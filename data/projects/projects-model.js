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

async function getTasks() {
    const tasks = await db("tasks as t")
        .join("projects as p", "t.projects_id", "p.id")
        .select("p.name", "t.id", "t.description", "t.completed")
    return tasks
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