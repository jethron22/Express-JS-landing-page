const express = require("express")
const app = express()
const port = 2110

// set the view engine to pug

app.set('view engine', 'pug');
app.set('views', 'vues');

//routes

app.get('/', (req, res) => {
    res.render('accueil')
    
})

app.get('/about', (req, res, next) => {
    res.render('about')
   
})

app.get('/mentors', (req, res) => {
    res.render('mentors')
    

})

app.get('/adresse', (req, res) => {
    res.render('adresse')
    console.log("adresse")

})

app.get('/contact', (req, res) => {

    res.render('contact')

})

// express listen method

app.listen(port, () => {
    console.log(`mon serveur est écouté sur le port ${port}`)

})