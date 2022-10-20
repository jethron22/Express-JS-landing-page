const express = require("express")
const app = express()
const port = 2100


app.get('/', (req, res) => {


    res.sendFile(__dirname + "/vues/accueil.html")

})

app.get('/about', (req, res) => {


    res.sendFile(__dirname + "/vues/about.html")


})


app.get('/mentors', (req, res) => {


    res.sendFile(__dirname + "/vues/mentors.html")


})

app.get('/adresse', (req, res) => {
 

    res.sendFile(__dirname + "/vues/adresse.html")


})

app.get('/contact', (req, res) => {


    res.sendFile(__dirname + "/vues/contact.html")


})



app.listen(port, () => {
    console.log(`mon serveur est écouté sur le port ${port}`)
})