let array = ["Ana", "Luis", "Carlos", "Ema"]

function elegirGanador(array){

   let number = Math.floor(Math.random()*(array.length))

    console.log(`ganador es ${array[number]}`)
}



elegirGanador(array)
elegirGanador(array)
elegirGanador(array)
elegirGanador(array)
elegirGanador(array)