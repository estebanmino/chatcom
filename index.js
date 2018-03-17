'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
const TOKEN = "EAAH5TpZCcKvcBAApjxMCW3k68QWZCK2fT47edt4Mb3PO4jlIqPBhocEKUxlvgcCvAeoQvEX0NdLG0kve8ZBUherxF9jbUGKGeHsUkLO2FMzzbhvaSPkMx40KjCeyt0cvjmGsVZAAAgAGIxWz25ZC3ggx5Owypro50caVAKJb1VwZDZD";

app.set('port', (process.env.PORT || 5000))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ROUTES
app.get('/', function(req, res) {
    res.send("Hi from chatcom")
})

// facebook

app.get('/webhook/', function(req, res) {
    if (req.query['hub.verify_token'] === TOKEN) {
        res.send(req.query['hub.challenge'])
    }
    res.send("Wrong token")
})

app.listen(app.get('port'), function() {
    console.log('running: port')
})