const express = require("express")
const app = express()
const port = 2101

// set the view engine to pug

app.set('view engine', 'pug');
app.set('views', 'vues');


app.get('/', (req, res) => {


    // res.sendFile(__dirname + "/vues/accueil.pug")
    res.render('accueil')

})

app.get('/about', (req, res) => {


    res.render('about')


})


app.get('/mentors', (req, res) => {


    res.render('mentors')


})

app.get('/adresse', (req, res) => {
 

    res.render('adresse')


})

app.get('/contact', (req, res) => {


    res.render('contact')


})



app.listen(port, () => {
    console.log(`mon serveur est écouté sur le port ${port}`)
})