

function tirarDados(){

    let resultado = {}

    resultado.dado1 = Math.floor(Math.random()*6) + 1

    resultado.dado2 =  Math.floor(Math.random()*6) + 1

    resultado.suma = resultado.dado1 + resultado.dado2

    console.log(resultado)

}

tirarDados()
tirarDados()
tirarDados()
tirarDados()
tirarDados()