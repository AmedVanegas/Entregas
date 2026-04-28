let mejorEstudiante = "";
let promedioMejorEstudiante = 0;


function calcularPromedio(NotasPorEstudiante) {
  let sumaNotas = 0;

  NotasPorEstudiante.forEach(function (nota) {
    sumaNotas += nota;
  });

  return sumaNotas / NotasPorEstudiante.length;
}

function estadoEstudiante(promedioPorEstudiante) {
  if (promedioPorEstudiante >= 3) {
    return "Aprobo";
  } else {
    return "Reprobo";
  }
}

function encontrarMejorEstudiante(estudiante) {
  if (calcularPromedio(estudiante.notas) > promedioMejorEstudiante) {
    promedioMejorEstudiante = calcularPromedio(estudiante.notas);

    mejorEstudiante = estudiante.nombre;
  } else {
  }
}

function init(estudiantes) {
  estudiantes.forEach(function (estudiante) {
    let promedioPorEstudiante = calcularPromedio(estudiante.notas);
    let nombreEstudiante = estudiante.nombre;
    let estado = estadoEstudiante(promedioPorEstudiante);

    encontrarMejorEstudiante(estudiante);

    console.log(
      `El estudiante ${nombreEstudiante} ${estado} con la nota de ${promedioPorEstudiante}`,
    );
  });

  console.log(
    `El mejor estudiante es ${mejorEstudiante} con un promedio de ${promedioMejorEstudiante}`,
  );
}

export { calcularPromedio, estadoEstudiante, init, encontrarMejorEstudiante };
