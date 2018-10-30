window.addEventListener('load', function(){
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

    

});