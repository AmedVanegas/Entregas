class Carro {
  estadoEncendido = false;
  velocidadMax;
  velocidadI = 0;
  color;

  constructor(velocidadMax, color) {
    this.velocidadMax = velocidadMax;
    this.color = color;
  }

  encendido() {
    this.estadoEncendido = !this.estadoEncendido;
    if(this.estadoEncendido){
        alert(`Carro Encendido`);
    }else{
        alert(`Carro Apagado`);
    }
  }

  acelerar(km) {
    if (!this.estadoEncendido) {
      alert(`¡¡Encienda el carro primero!!`);
    }else if (km <= 0) {
      alert("Ingrese un valor valido");
    } else if (this.velocidadI + km > this.velocidadMax) {
      alert(`Supera su velocidad maxima`);
    } else {
      this.velocidadI += km;
      alert(`Su velocidad es ${this.velocidadI} Km/h`);
    }
  }

  frenar(km) {
    if (!this.encendido) {
      alert(`¡¡Encienda el carro primero!!`);
    }else if (this.velocidadI - km < 0) {
      alert(`No puede tener una velocidad menor que 0 Km/h`);
    } else {
      this.velocidadI -= km;
      alert(`Su velocidad es ${this.velocidadI} Km/h`);
    }
  }
}

function menu() {
  let opcion = prompt(`
    
        ELIJA UNA OPCIÓN
        
        1) Encender
        2) Acelerar
        3) Frenar
        4) Salir`);

  return opcion;
}

function funcionCarro() {
  let color = prompt(`Elija el color de su carro`);
  let velocidadMax = Number(prompt(`¿Cual es la velocidad maxima de su vehiculo?`),);
  let carro = new Carro(velocidadMax, color);
  alert(`Color de su carro: ${carro.color}

Velocidad maxima ${carro.velocidadMax} Km/h`)

  let i = 0;

  do {
    let opcion = menu();

    i = Number(opcion);

    switch (i) {
      case 1:
        carro.encendido();

        break;
      case 2:
        carro.acelerar(Number(prompt(`¿Cuanto desea acelerar?`)));
        
        break;
      case 3:
        carro.frenar(Number(prompt(`¿Cuanto desea frenar?`)));
        break;
      case 4:
        alert(`=====Adios=====`);

        break;

      default:
        alert(`opcion no valida`);
        break;
    }
  } while (i !== 4);
}

funcionCarro();
