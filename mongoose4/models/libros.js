var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibroSchema =  Schema({
  Titulo: String,
  Autor: {
    primer: String,
    paterno: String
  },
  Año: Number,
  isbn: Number
});

module.exports = mongoose.model('Libro', LibroSchema);
