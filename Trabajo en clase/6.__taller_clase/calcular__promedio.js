const estudiante = {
    nombre: "pablo",
    notas: [4,4.5,3,4,3.5]
}


function promedioNotas(estudiante){

    const notas = estudiante.notas

    let total = 0

    notas.forEach(function(nota){

        total += nota

    })

    return (total/notas.length)


}



console.log(promedioNotas(estudiante))