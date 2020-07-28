const express = require('express')
const routes = express.Router()
const instructors = require('./app/controllers/instructors')
const members = require('./app/controllers/members')

routes.get('/', function(req, res){
    return res.send("Ok")
})

module.exports = routes