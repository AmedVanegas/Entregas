// este lo habia hecho en clase con el otro profe

function numero() {
  let azar = Math.floor(Math.random() * 100 + 1);

  let estado = true;

  i = 1;

  alert(azar);

  while (estado) {
    let user = Number(prompt("dime un numero del 1 al 100"));

    if (user > azar) (alert(`intenta un poco menos`), i++);
    else if (user < azar) (alert(`intenta un poco mas`), i++);
    else (alert(`ganaste en ${i} intentos`), (estado = false));
  }
}

numero();
