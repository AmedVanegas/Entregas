


function pares (numeroMenor, numeroMayor) {

    let pares = []

    for (let i = numeroMenor; i <= numeroMayor; i++) {
        
        if(i % 2 == 0){

            pares.push(i)

        }
        

    }


    console.log(pares)


}


pares(1,10)


