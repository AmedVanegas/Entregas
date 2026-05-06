const estudiantes = [
  { nombre: "Ana García", nota: 92 },
  { nombre: "Luis Pérez", nota: 75 },
  { nombre: "María López", nota: 58 },
  { nombre: "Carlos Ruiz", nota: 83 },
  { nombre: "Sofía Martínez", nota: 47 },
  { nombre: "Andrés Torres", nota: 100 },
  { nombre: "Valentina Cruz", nota: 61 },
  { nombre: "Diego Ramírez", nota: 34 },
  { nombre: "Camila Herrera", nota: 89 },
  { nombre: "Sebastián Mora", nota: 72 },
];


function mejorEstudiante(estudiantes){

    let mejor = estudiantes[0]
    

    estudiantes.forEach(function(estudiante){
        if (mejor.nota < estudiante.nota ){

            mejor = estudiante
        }


    })

    console.log(`el mejor estudiante es ${mejor.nombre} con ${mejor.nota}`)




}

mejorEstudiante(estudiantes)