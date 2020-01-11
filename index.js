const express = require("express")
const projectsRouter = require("./data/projects/projects-router")

const server = express()
const port = process.env.port || 4000

server.use(express.json())
server.use("/api", projectsRouter)

server.use((err, req, res, next) => {
    console.log("Error:", err)
    res.status(500).json({
        message: `Something went wrong`
    })
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})