const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Gig = require('../models/Gigs')


// Get gig list
router.get('/', (req, res) => {
    Gig.findAll()
        .then(gigs => {
            console.log(gigs)
            return res.sendStatus(200);
        })
        .catch(err => console.log(err))
})

// Add a gig
router.get('/add', (req, res) => {
    const data = {
        // id: 1,
        title: 'Looking for a react developer',
        technologies: 'react, java, css',
        budget: '$3000',
        description: 'fgsdgf sd fbg sdf',
        contact_email: 'test@test.com'
    }

    //destructuring 
    let { id, title, technologies, budget, description, contact_email } = data;

    Gig.create({
        // id,
        title,
        technologies,
        description,
        budget,
        contact_email
    }).then(gig => {
        res.redirect('/gigs')
    })
        .catch(err => {
            console.log("Error: ", err)

        })



})

module.exports = router