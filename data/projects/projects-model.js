const db = require("../db-config")

function getResources(project_id) {
    
}

function addResource() {

}

function getProjects() {
    return db("projects").select()
}

function addProject() {

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