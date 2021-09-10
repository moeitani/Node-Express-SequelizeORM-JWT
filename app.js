const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const db = require('./config/database')

// db.authenticate()
//     .then(() => console.log("Database Connected..."))
//     .catch((err) => console.log("Error: ", err))

const app = express()


// app.use(express.json());
// app.use(express.urlencoded({
//     extended: true
// }));
// app.get('/', (req, res) => res.send("Index"))

//Gig Routes
app.use('/gigs', require('./routes/gigs'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))

