const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

var app = express();

// para defnir la carpeta publica
app.use(express.static('public'));
//app.set('views', path.join("/views", 'views'));
//app.use(express.static(path.join(__dirname, '/public')));

//para registrar el motor de render handlebars
app.engine('handlebars', hbs());

//para setear el motor de render a utilizar
app.set('view engine','handlebars');
////////////////////////////////////////////////////////////////////////

//renderizar el template de la pagina inicial t1
app.get('/', function(request, response){
    var prod = request.params.producto;
    var contexto = {
        producto: prod
    };
    response.render('inicio', contexto);
});

//renderizar la pagina de la tienda dependiendo si es camisa, camiseta o pantalon
app.get('/tienda', function(request, response){
    var prod = request.query.producto;
    console.log(prod);
    
    //cosas que le voy ha pasar al template dependiendo del producto
    if(prod == "camisetas"){

    }else if(prod == "camisas"){
        
    } else if(prod == "pantalones"){
        
    }
    
    var contexto = {
        titulo: prod.toUpperCase()
    };
    response.render('home', contexto);
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