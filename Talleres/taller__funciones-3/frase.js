

function fraseAleatoria(){

    let opciones = ["sigue asi", "no pares", "tu puedes", "eres genial"]

    let number = Math.floor(Math.random()*(opciones.length))

    return opciones[number]
}


console.log(fraseAleatoria())
console.log(fraseAleatoria())
console.log(fraseAleatoria())
console.log(fraseAleatoria())
console.log(fraseAleatoria())