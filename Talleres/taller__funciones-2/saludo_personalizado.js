function obtenerRango(number){

    if (number >= 6 && number <= 11){

        return "Buenos dias"

    }else if (number >= 12 && number <= 17){
        return  "Buenas tardes"


    }else if (number >= 18 && number <= 23){
        return "Buenas noches"

    }else{
        return "Feliz Madrugada"

    }


}

function saludoPersonalizado(nombre, hora){

    let saludo = obtenerRango(hora)

    console.log(`${saludo} ${nombre}`)


}


saludoPersonalizado("Amed", 7)