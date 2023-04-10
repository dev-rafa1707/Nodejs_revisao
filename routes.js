const express = require("express")
const routes = express.Router()

let lista = [{"id":1,"nome":"Joao", "idade":18},
             {"id":2,"nome":"Maria", "idade":35},
             {"id":3,"nome":"Paula", "idade":27},
            {"id":4,"nome":"Fabiano", "idade":50},]


routes.get("/",(req,res)=>{
    res.status(200).json(lista)
})

module.exports = routes