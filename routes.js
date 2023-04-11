const express = require("express")
const routes = express.Router()

let lista = [{"id":1,"nome":"Joao", "idade":18},
             {"id":2,"nome":"Maria", "idade":35},
             {"id":3,"nome":"Paula", "idade":27},
            {"id":4,"nome":"Fabiano", "idade":50},]


routes.get("/",(req,res)=>{
    res.status(200).json(lista)
})


routes.get("/:id",(req,res)=>{
    res.status(200).json(lista[req.params.id-1])
})


routes.post("/",(req,res)=>{
    console.log(req.body)
    lista.push(req.body)
    res.send("OK")
})

routes.put("/:id",(req,res)=>{
    console.log(req.body)
    lista[req.params.id-1]=req.body
    res.status(200).send("OK")
})

routes.delete("/:id",(req,res)=>{
    lista.splice(req.params.id-1,1)
    res.status(200).redirect("/")
})
module.exports = routes