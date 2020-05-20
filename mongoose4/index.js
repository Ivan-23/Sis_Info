var mongoose = require('mongoose');
var Libro = require('./models/libros.js');

mongoose.connect('mongodb+srv://Usuario1:UXsroBTdtXnd60WB@cluster0-dwzs9.mongodb.net/alumnos?retryWrites=true', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));


function nuevosLibros(){
var libros=[
  {Titulo:"Largo Petalo de Mar",Autor: {primer:"Matilde",paterno:"Asensi"},Año:2019,isbn:9788401022418},
  {Titulo:"Los Asquerosos",Autor: {primer:"Santiago",paterno:"Lorenzo"},Año:2018,isbn:9788417059996},
  {Titulo:"Lectura Facil",Autor: {primer:"Cristina",paterno:"Morales"},Año:2018,isbn:9788433998644},
  {Titulo:"Terra Alta",Autor: {primer:"Javier",paterno:"Cercas"},Año:2019,isbn:9788408217848},
  {Titulo:"Loba Negra",Autor: {primer:"Juan",paterno:"Gómez"},Año:2019,isbn:9788466666497},
  {Titulo:"Alegría",Autor: {primer:"Manuel",paterno:"Villas"},Año:2019,isbn:9788408217855},
  {Titulo:"El Pintor de Almas",Autor: {primer:"Ildefonso",paterno:"Falcones"},Año:2019,isbn:9788425357244},
  {Titulo:"Padre Rico,Padre Pobre",Autor: {primer:"Robert",paterno:"Kiyosaki"},Año:2015,isbn:9786073133593},
  {Titulo:"El Alquimista",Autor: {primer:"Paulo",paterno:"Coello"},Año:1988,isbn: 9788408028864},
  {Titulo:"El esclavo",Autor: {primer:"Anand",paterno:"Dilvar"},Año:2000,isbn:9789708070034},
];

  Alumno.collection.insert(alumnos,function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}

function buscarByIsbn (isbn){
  Libro.find({isbn:isbn},function(err,documentos){
    console.log(documentos);
  });
}


function main() {
  nuevosLibros(); //Inserta los libros
}

main();    // ejecutamos main
