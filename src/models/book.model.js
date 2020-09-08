const Sequelize = require('sequelize');
const db = require('../configs/database');

const Book = db.define('books', {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
});

module.exports = Book

// Sequelize Model ini merepresentasikan tabel Book dalam database MySQL. Kolom-kolom
// ini akan dihasilkan secara otomatis: id, title, deskripsi, author, createdAt, dan updatedAt.

// Setelah menginisialisasi Sequelize, kami tidak perlu menulis fungsi CRUD secara manual,
// Sequelize mendukung semuanya:
   // • create a new Book: create(object)
   // • find a Book by id: findByPk(id)
   // • get all Books: findAll()
   // • update a Book by id: update(data, where: { id: id })
   // • remove a Book: destroy(where: { id: id })
   // • remove all Books: destroy(where: {})
   // • find all Books by title: findAll({ where: { title: ... } })\
// fungsi-fungsi ini akan digunakan pada Controller kita. 