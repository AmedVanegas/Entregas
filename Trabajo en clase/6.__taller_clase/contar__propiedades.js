const persona ={ nombre: "Ana García", nota: 92 }


function contarPropiedades(objeto){

    let propiedades = Object.keys(objeto).length

    console.log(propiedades)

    

}

contarPropiedades(persona)