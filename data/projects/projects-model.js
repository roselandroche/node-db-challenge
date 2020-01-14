const db = require("../db-config")

async function getResources() {
    const resources = await db("resources as r")
        .select("r.name")
    return resources
}

async function addResource(newResource) {
    const [id] = await db("resources").insert(newResource)
    return db("resources").where({ id }).first()
}

function getProjects() {
    return db("projects")
}

function getProjectById(id) {
    return db("projects").where({ id }).first()
}

async function addProject(newProject) {
    const [id] = await db("projects").insert(newProject)
    return db("projects").where({ id }).first()
}

async function getTasks() {
    const tasks = await db("tasks as t")
        .join("projects as p", "t.projects_id", "p.id")
        .select("p.name", "p.description", "t.id", "t.description", "t.completed")
    return tasks
}

async function addTask(newTask) {
    const [id] = await db("tasks").insert(newTask)
    return db("tasks").where({ id }).first()
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