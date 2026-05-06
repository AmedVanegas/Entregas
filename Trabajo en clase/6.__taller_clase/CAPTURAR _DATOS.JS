class Persona {
  edad;
  nombre;
  genero;

  constructor(nombre, edad, genero = "n/a") {
    this.edad = edad;

    this.nombre = nombre;

    this.genero = genero;
  }
}

function generoi(personas) {
  let masculinos = [];
  let femeninos = [];

  personas.forEach(function (value) {
    if (value.genero == "masculino") {
      masculinos.push(value.nombre);
    } else {
      femeninos.push(value.nombre);
    }

  });

  console.log(`masculinos ${masculinos}`)
  console.log(`femeninos ${femeninos} `)

}

function personasD() {
  let personas = [];

  for (let i = 0; i < numeroPersonas; i++) {
    let persona;

    let nombre = prompt("dime tu nombre");
    let edad = prompt("dime tu edad");
    let genero = prompt("dime tu genero ");

    personas.push(new Persona(nombre, edad, genero));  
}

  generoi(personas)
}


let numeroPersonas = Number(prompt(`¿Cuántas personas deseas registrar?`))


personasD();