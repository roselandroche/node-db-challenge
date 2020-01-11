const db = require("../db-config")

function getResources(project_id) {
    
}

function addResource() {

}

function getProjects() {
    return db("projects").first()
}

function getProjectById(id) {
    return db("projects").where({id}).first()
}

async function addProject(newProject) {
    const [id] = await db("projects").insert(newProject)
    return db("projects").where({ id }).first()
}

async function getTasks(project_id) {
    const tasks = await db("tasks as t")
        .join("projects as p", "t.projects_id", "p.id")
        .select("p.name", "p.description", "t.id", "t.description", "t.completed")
        .where("p.id", project_id)
    return tasks
}

function addTask(project_id) {
    
}

module.exports = {
    getResources,
    addResource,
    getProjects,
    getProjectById,
    addProject,
    getTasks,
    addTask,
}