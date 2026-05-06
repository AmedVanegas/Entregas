function validador(number) {
  if (number >= 100 || number <= 0) {
    console.error("NO SE PUEDE");

    return false;
  } else {
    return true;
  }
}

function factorial(number) {
  if (!validador(number)) return;

  let numberActual = number

  let total = number

  do {
    numberActual = numberActual - 1;

    total = total * numberActual
    
  } while (numberActual > 1);

  return total
}

console.log(factorial(5));
