import { Carro } from "./Carro_class.js";

function menu() {
  let opcion = prompt(`
    
        ELIJA UNA OPCIÓN
        
        1) Encender/Apagar
        2) Acelerar
        3) Frenar
        4) Salir`);

  return opcion;
}

function activarMenu(carro) {
  let i = 0;

  do {
    let opcion = menu();

    i = Number(opcion);

    switch (i) {
      case 1:
        alert(carro.encendido());

        break;
      case 2:
        alert(carro.acelerar(Number(prompt(`¿Cuanto desea acelerar?`))));

        break;
      case 3:
        alert(carro.frenar(Number(prompt(`¿Cuanto desea frenar?`))));
        break;
      case 4:
        alert(`=====Adios=====`);

        break;

      default:
        alert(`Opción no valida`);
        break;
    }
  } while (i !== 4);
}

function datosCarro(color, velocidadMax, carro) {
  alert(`Color de su carro: ${carro.color}

Velocidad maxima ${carro.velocidadMax} Km/h`);
}

function funcionCarro() {
  let color = prompt(`Elija el color de su carro`);
  let velocidadMax = Number(prompt(`¿Cual es la velocidad maxima de su vehiculo?`));
  let carro = new Carro(velocidadMax, color);
  datosCarro(color, velocidadMax, carro);
  activarMenu(carro);
}

export {funcionCarro};
