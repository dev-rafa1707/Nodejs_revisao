const express = require("express")
const routes = require("./routes")

const server = express()

server.use(routes)
server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.listen(3000,()=>{
    console.log("Listening on port 3000")
})