const array = [1,2,3,6,5,0]

function sumarArray(array){

    total = 0
    array.forEach(function(value){

        total += value


    })


    return total 


}

console.log(sumarArray(array))

//jhdiuasnjdnajdnadnklajndkjankldjnakldnlajdnlandkjasdn


function mayor(array){

    total = 0
    array.forEach(function(value){

        if(total<value){

            total = value
        }


    })


    return total 


}

console.log(mayor(array))

//jbsdabjdbakhldlakjdbjabdjlabdjabldjabshjdbajdlkasjbdkjablkdjblas


function contarPares(array){

    total = 0

    array.forEach(function(value){

        if((value % 2 == 0) && (value != 0)){

            total += 1
        }


    })


    return total 


}


console.log(contarPares(array))


//sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssa


function invertirArray(array){

    let arryaInv = []

    for ( i = array.length - 1 ; i >= 0 ; i--) {
        
        arryaInv.push(array[i])
        
    }

    console.log(arryaInv)

}
invertirArray(array)

//sadkjgauhsbdabsdabldjabsdijabsldkjabsiudblaksbdajlbsdjasbabksjd

function buscarElemento (array, item){

   return array.find(function(value){
      return value == item
    })

}


let resultado = buscarElemento(array,1) ? true : false;
console.log(resultado)

resultado = buscarElemento(array,7) ? true : false;
console.log(resultado)








