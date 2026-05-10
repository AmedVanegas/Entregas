function jugadaComputadura() {
  
    let opciones = ["piedra", "papel", "tijeras"];

  let number = Math.floor(Math.random() * 3);

  return opciones[number];
}

function ganador(user, computer) {
  if (user == computer) {
    return "empate";
  } else if (
    (user == "tijeras" && computer == "papel") ||
    (user == "piedra" && computer == "tijeras") ||
    (user == "papel" && computer == "piedra")
  ) {
    return "ganaste";
  } else {
    return "perdiste";
  }
}


function jugar (user){

let computer = jugadaComputadura()

return ganador(user,computer)


}



console.log(jugar("tijeras"))
console.log(jugar("tijeras"))
console.log(jugar("tijeras"))
console.log(jugar("tijeras"))
console.log(jugar("tijeras"))
console.log(jugar("tijeras"))
