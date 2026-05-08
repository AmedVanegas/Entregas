let array = ["hola", "sol", "elefante", "mar"]

function filtrar (array, numeroLetras){

    let palabras = []



    array.forEach(function(value){


        if(value.length >= numeroLetras){

            palabras.push(value)
        }



    });


        console.log(palabras)



}

filtrar(array, 5)