//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

// implementar en el boton click me un cambio de color de fondo en el body

let cambioColorBody = document.querySelector(".btn");
cambioColorBody.onclick = funcionColor;

function funcionColor(){
    document.body.style.backgroundColor = getRandomColor();
}


function getRandomColor() {
    // Si bien normalmente las funciones no conocen nada del exterior; estos casos son una buena excepción. La lista de colores se puede considerar una cofiguración "global" a la cual cualqueir función debe poder acceder.
    let numColores = colors.length
    let indiceRandom = Math.floor(Math.random() * numColores)
    return colors[indiceRandom]
}
