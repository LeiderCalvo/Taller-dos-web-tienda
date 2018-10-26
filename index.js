const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;
//const path = require('path');

const app = express();

const url = 'mongodb://localhost:27017';
const dbName = 'Tienda';
const client = new MongoClient(url);
var db = null;

//codigo para conectarnos con el cliente que acabamos de crear  
client.connect(function(err){
    if(err){
      console.error(err);
      return;
    }
  
    db = client.db(dbName);
});


// para defnir la carpeta publica
app.use(express.static('public'));
//para registrar el motor de render handlebar
app.engine('handlebars', hbs());
//para setear el motor de render a utiliza
app.set('view engine','handlebars');



//LLAMADO DE LAS RUTAS//////////////////////////////////////////////////////////////////////

//renderizar el template de la pagina inicial t1
app.get('/', function(request, response){
        response.render('inicio');
});

//renderizar la pagina de la tienda dependiendo si es camisa, camiseta o pantalon
app.get('/tienda', function(request, response){
    const coleccion = db.collection('productos');
    //usamos el objeto vacìo para que retorne todos los documentos
    coleccion.find({
        color: {
            '$eq': "Negro"
       }
    }).toArray(function(err, docs){
        if(err){
            console.error(err);
            response.send(err);
            return;
        }        
        
        var prod = request.query.producto;
        console.log(prod);
    
        var contexto = {
            titulo: prod.toUpperCase(),
            productos: docs,
        };
        
        response.render('home', contexto);
        
    });
});

//para agregar un documento a la base de datos de mongo
app.get('/AgregarDocumento', function(request, response){
    const coleccion = db.coleccion('Productos');
    //aqui debería pasarle variables por la ruta para agregar
    coleccion.insert({
            Titulo : "GIORDANA",
            magen : "/imgs/ksjdfksjdnkfsdf",
            Precio : 280000.0,
            color : "Negro",
            tallas : [ "xs", "s", "m"],
    }, function(err, result){
        if(err){
            console.error(err);
            response.send(err);
            return;
        }

        response.send('Documento agregado');
    });
});

/*
//ejemplo de como usar el tipo de variable que va con esa ruta (en chrome se escribe /tienda/var=val)
app.get('/tienda/:este', function(request, response){
    var prod = request.params.producto;
    console.log("con :"+prod);
    var contexto = {
        texto: 'Mi texto de prueba'
    };
    response.render('home', contexto);
});
*/
////////////////////////////////////////////////////////////////////////

//iniciar el servidor en el puerto especificado
app.listen(5500);