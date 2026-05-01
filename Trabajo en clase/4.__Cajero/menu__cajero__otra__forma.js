const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


// menu con do while

let option //undefinced

do {

    console.log(`
        
BIENVENIDO AL CAJERO AUTOMATICO
  
  1) Consignar
  
  2) Retirar
  
  3) Consultar
  
  4) Transferir
  
  5) Pagar

  6) Historial

  7) Salir
  `)





rl.question("\nElige una opción: ", (opcion) => {
    option = opcion
  })


}

while (option !== "7" )

