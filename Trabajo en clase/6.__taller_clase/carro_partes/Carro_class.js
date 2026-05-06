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
        return `Carro Encendido`;
    }else{
        return `Carro Apagado`;
    }
  }

  acelerar(km) {
    if (!this.estadoEncendido) {
      return `¡¡Encienda el carro primero!!` ;
    }else if (km <= 0) {
      return "Ingrese un valor valido" ;
    } else if (this.velocidadI + km > this.velocidadMax) {
      return `Supera su velocidad maxima`;
    } else {
      this.velocidadI += km;
      return `Su velocidad es ${this.velocidadI} Km/h`;
    }
  }

  frenar(km) {
    if (!this.estadoEncendido) {
      return`¡¡Encienda el carro primero!!`;
    }else if (this.velocidadI - km < 0) {
      return `No puede tener una velocidad menor que 0 Km/h`;
    } else {
      this.velocidadI -= km;
      return `Su velocidad es ${this.velocidadI} Km/h`;
    }
  }
}


export {Carro}