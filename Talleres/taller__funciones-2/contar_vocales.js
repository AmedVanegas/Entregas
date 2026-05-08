function numero (letra, vocalesPalabra, vocales){

    vocales.forEach(function(vocal){

        if (letra == vocal){

            vocalesPalabra[vocal] += 1
            


        }


    })


}



function contarVocales (palabra){
    
    
    let vocales = ["a","e","i","o","u"]

    let vocalesPalabra = {
    a:0,
    e:0,
    i:0,
    o:0,
    u:0

   }


    palabra.split("").forEach(function(letra){

        numero(letra, vocalesPalabra, vocales)

    

    })

    console.log(vocalesPalabra)

}

contarVocales("hola mundo")