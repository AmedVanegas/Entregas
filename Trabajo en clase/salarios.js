const salarios = [4500000, 3200000, 6000000, 3800000, 2900000];




function Calcularimpuesto (array, impuesto){

    let salariosConImpuesto = []

    array.forEach(function(value){


        salariosConImpuesto.push(value * impuesto )


    })


    console.log(salariosConImpuesto)



}

Calcularimpuesto(salarios, 0.1)