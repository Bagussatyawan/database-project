const express = require('express');
const router = require('./src/routes/book.route');


// Databases
const db = require('./src/configs/database');

// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error:' + err))


const app = express()

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurasi Cors
app.use((req, res, next) => {
    res.setHeader('Accsess-Control-Allow-Origin', '*');
    res.setHeader('Accsess-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Accsess-Control-Allow-Headers', 'Content-Type, Authorization');

    next()
});

app.use('/api/books', router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));