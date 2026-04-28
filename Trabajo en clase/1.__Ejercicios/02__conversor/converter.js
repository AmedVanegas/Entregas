import { tasasDeCambio } from "./rates.js";

function validador(valor) {
  if (valor <= 0) {
    throw new Error("ingrese un valor valido");
  } 
}

function conversor(valor, moneda) {
  let valorConvertido = 0;

  return (valorConvertido = valor / tasasDeCambio[moneda]);
}

function formato(valorConvertido) {
  return Number(valorConvertido.toFixed(2));
}

function init(valor, moneda) {
  validador(valor);
  let valorConvertido = formato(conversor(valor, moneda));

  console.log(`${valor} convertido a ${moneda} = ${valorConvertido}`);
}

init(7156, "EUR");
