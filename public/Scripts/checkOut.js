window.addEventListener('load', function(){
    
    function actualizarPrecio() {
        var t = document.querySelectorAll('.precio');
        var precio = 0;
        t.forEach(element => {
            var pre = element.getAttribute('data-precio');
            precio +=  parseInt(pre);        
        });
        var total = document.querySelector('.total');
        total.innerText = `TOTAL: ${precio}`;
    }

    var x = document.querySelectorAll('.color');
    x.forEach(element => {
        var color = element.getAttribute('data-color'); 
        switch (color) {
            case "Negro":
                element.style.backgroundColor = "black";
                break;
            case "Verde":
                element.style.backgroundColor = "green";
                break;
            case "Blanco":
                element.style.backgroundColor = "white";
                break;
            case "Gris":
                element.style.backgroundColor = "gray";
                break;
            case "Rosado":
                element.style.backgroundColor = "pink";
                break;
            case "Cafe":
                element.style.backgroundColor = "brown";
                break;
            case "Azul":
                element.style.backgroundColor = "blue";
                break;
        }
    });

    actualizarPrecio();

    document.querySelector('.btnVaciar').addEventListener('click', function(){
        localStorage.clear();

        fetch(`/api/vaciarCarrito`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: ``,
        }).then(function(respuesta){
            return respuesta.text();
        }).catch(function(error){
            console.error(error);
        }).then(function(mensaje){
            console.log(mensaje);
        });

        window.location.href = "/checkOut";
    });

}); 