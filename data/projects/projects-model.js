const db = require("../db-config")

async function getResources(project_id) {
    const resources = await db("projects_resources as p_r")
        .join("projects as p", "p_r.projects_id", "p.id")
        .join("resources as r", "p_r.resources_id", "r.id")
        .select("p.name", "r.name")
        .where("p.id", project_id)
        .first()
    return resources
}

async function addResource(newResource) {
    const [id] = await db("resources").insert(newResource)
    return db("resources").where({ id }).first()
}

function getProjects() {
    return db("projects")
        .select("name", "description", "completed")
        .first()
}

function getProjectById(id) {
    return db("projects").where({ id }).first()
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