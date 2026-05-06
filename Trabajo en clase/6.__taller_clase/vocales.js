let texto = "hola"


let cuenta = 0

for (let index = 0; index < texto.length; index++) {

    

    if ("aeiouAEIOU".includes(texto[index])) {
      cuenta++;
    }
  }
    
    
console.log(cuenta)


