

function generarContraseña(){

    let contraseña = ""

    for (let i = 1; i < 5; i++) {

      let number =  String(Math.floor(Math.random()*6)+1)
       
        contraseña += number
    }

    console.log(contraseña)



} 

generarContraseña()
generarContraseña()
generarContraseña()
generarContraseña()