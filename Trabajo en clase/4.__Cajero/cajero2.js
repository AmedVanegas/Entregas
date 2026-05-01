const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let saldoBanco = 100;
let deuda = 300;
let cuentaX = 50;
let historial = [];

function validadorMonto(dinero) {
  if (dinero <= 0) {
    console.error(`
      
      Ingrese un monto valido
      
      `);
    return false;
  } else {
    return true;
  }
}

function validadorCuenta(dinero) {
  if (saldoBanco - dinero < (saldoBanco * 10) / 100) {
    console.error(`
      
      Tiene que dejar minimo el 10% de su saldo total
      
      `);
    return false;
  } else {
    return true;
  }
}

function consignarDinero(dineroConsignar) {
  if (!validadorMonto(dineroConsignar)) 
    return

  saldoBanco += dineroConsignar
  consultar()
  historial.push(`+${dineroConsignar} CONSIGNACIÓN`)
}

function retirar(dineroRetirar) {
  if (!validadorMonto(dineroRetirar))
  return
  if (!validadorCuenta(dineroRetirar))
  return

  saldoBanco -= dineroRetirar

  consultar()

  historial.push(`-${dineroRetirar} RETIRO`)
}

function consultar() {
  console.log(`
    
    Usted tiene $${saldoBanco} dolares en su cuenta de banco
    
    `);
}

function transferir(dineroTransferir) {
   if (!validadorMonto(dineroTransferir))
  return
  if (!validadorCuenta(dineroTransferir))
  return

  let transfereciaImpuesto = dineroTransferir + dineroTransferir / 100

  saldoBanco -= transfereciaImpuesto;
  cuentaX += dineroTransferir;

  historial.push(`-${transfereciaImpuesto} TRANSFERENCIA`)

  consultar()
  console.log(`cuenta x ${cuentaX}`);
}

function pagar(dineroAbonar) {
  if (!validadorMonto(dineroAbonar))
  return
  if (!validadorCuenta(dineroAbonar))
  return

  if (deuda - dineroAbonar < 0) {
    console.error(`
      
      No puede pagar mas de lo que debe
      
      `);
  } else {
    let abonoImpuesto = dineroAbonar + (dineroAbonar * 5) / 100

    saldoBanco -= abonoImpuesto;

    deuda -= dineroAbonar;

    historial.push(`-${abonoImpuesto} PAGO `)
    consultar()
    console.log(`
      
      Su deuda ahora es de ${deuda}
      
      `);
  }
}

function mostrarHistorial (){

  historial.forEach(function(moviento){

    console.log(`
        ${moviento}
        `)

  })


}

function mostrarMenu() {
  console.log(
    ` BIENVENIDO AL CAJERO AUTOMATICO
  
  1) Consignar
  
  2) Retirar
  
  3) Consultar
  
  4) Transferir
  
  5) Pagar

  6) Movimientos

  7) Salir
  `,
  );

  rl.question("\nElige una opción: ", (opcion) => {
    ejecutarOpcion(opcion);
  });
}

function ejecutarOpcion(opcion) {
  switch (opcion) {
    case "1":
      rl.question("\nDinero a consignar ", (dinero) => {
        consignarDinero(Number(dinero));
        mostrarMenu();
      });

      break;
    case "2":
      rl.question("\nDinero a retirar ", (dinero) => {
        retirar(Number(dinero));
        mostrarMenu();
      });

      break;
    case "3":
      consultar();
      mostrarMenu();

      break;
    case "4":
      rl.question("\nDinero a transferir ", (dinero) => {
        transferir(Number(dinero));
        mostrarMenu();
      });

      break;
    case "5":
      rl.question("\nDinero a pagar ", (dinero) => {
        pagar(Number(dinero));
        mostrarMenu();
      });

      break;

    case "6":
      console.log(`
                    Historial
        `)
        mostrarHistorial()
      mostrarMenu()
      break;

    case "7":
      console.log(`
        
        
                      Adios
        
        
        `);
      rl.close();
      break;

    default:
      console.log('Opción no válida');
      mostrarMenu();
      break;
  }
}

mostrarMenu();

