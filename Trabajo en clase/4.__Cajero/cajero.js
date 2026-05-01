let saldoBanco = 100;
let deuda = 300;
let cuentaX = 50;
let historial = []


function validadorMonto(dinero){

 if (dinero <= 0) {
    console.error(`Ingrese un monto valido`)
}}

function validadorCuenta(dinero){
   if (saldoBanco - dinero < (saldoBanco * 10) / 100) {
    console.error(`tiene que dejar minimo el 10% de su saldo total`);

}}

function consignarDinero(dineroConsignar) {
  if (dineroConsignar <= 0) {
    console.error(`Ingrese un monto valido`);
  } else {
    saldoBanco += dineroConsignar;
    console.log(saldoBanco)
  }
}

function retirar(dineroRetirar) {
  if (dineroRetirar <= 0) {
    console.error(`Ingrese un monto valido`)
  } else if (saldoBanco - dineroRetirar < (saldoBanco * 10) / 100) {
    console.error(`tiene que dejar minimo el 10% de su saldo total`);
  } else {
    saldoBanco -= dineroRetirar;

    console.log(saldoBanco);
  }
}

function consultar() {
  console.log(`Usted tiene $${saldoBanco} dolares en su cuenta de banco`);
}

function transferir(dineroTransferir) {
  if (dineroTransferir <= 0) {
    console.error(`Ingrese un monto valido`)
  } else if (saldoBanco - dineroTransferir < (saldoBanco * 10) / 100) {
    console.error(`tiene que dejar minimo el 10% de su saldo total`);
  } else {
    saldoBanco -= dineroTransferir + dineroTransferir / 100;
    cuentaX += dineroTransferir

    console.log(saldoBanco);
    console.log(`cuenta x ${cuentaX}`)
  }
}

function pagar(dineroAbonar) {
 if (dineroAbonar <= 0) {
    console.error(`Ingrese un monto valido`)
  } else if (deuda - dineroAbonar < 0 ) {
    console.error(`No puede pagar mas de lo que debe`);
  } else {
    saldoBanco -= dineroAbonar + ( dineroAbonar * 5 )/ 100;

    deuda -= dineroAbonar

    console.log(saldoBanco);
    console.log(deuda)
  }

}

consultar()
consignarDinero(50)
retirar(20)
consultar()
transferir(20)
pagar(20)

