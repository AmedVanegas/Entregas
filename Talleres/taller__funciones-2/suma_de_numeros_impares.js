let numeros = [10, 15, 20, 25]


function sumaImpares ( numeros){

    let suma = 0

    numeros.forEach(function(value){

        if(value % 2 !== 0){

            suma += value

        }

        
    })

    console.log(suma)


}


sumaImpares(numeros)