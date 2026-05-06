let persona = {nombre: "pedro"}


function agregarPropiedad (objeto, propiedad, valor){

    persona[propiedad] = valor

    console.log(persona)


}

agregarPropiedad(persona, "edad", 45)
