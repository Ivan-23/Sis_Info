var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibroSchema =  Schema({
  Titulo: String,
  Autor: {
    primer: String,
    paterno: String
  },
  isbn: Number,
  Año: Number
});

module.exports = mongoose.model('Libro', LibroSchema);
