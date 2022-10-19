const express = require("express")
const app = express()
const port = 2007


app.get('/', (req, res) => {

    console.log(__dirname)

    res.sendFile(__dirname + "/vues/accueil.html")


})

app.get('/about', (req, res) => {

    console.log(__dirname)

    res.sendFile(__dirname + "/vues/about.html")


})


app.get('/Mentors', (req, res) => {

    console.log(__dirname)

    res.sendFile(__dirname + "/vues/Mentors.html")


})

app.get('/adresse', (req, res) => {

    console.log(__dirname)

    res.sendFile(__dirname + "/vues/adresse.html")


})

app.get('/contact', (req, res) => {

    console.log(__dirname)

    res.sendFile(__dirname + "/vues/contact.html")


})



app.listen(port, () => {
    console.log(`mon serveur est écouté sur le port ${port}`)
})