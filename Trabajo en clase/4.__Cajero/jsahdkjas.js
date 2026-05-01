const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Convertimos rl.question en una función que retorna Promise
function preguntar(texto) {
  return new Promise((resolve) => {
    rl.question(texto, (opcion) => {
      resolve(opcion); // ← cuando el usuario responde, resuelve la promesa
    });
  });
}

async function main() {
  let option; // ← afuera, como querías

  do {
    console.log(`
BIENVENIDO AL CAJERO AUTOMATICO

  1) Consignar
  2) Retirar
  3) Consultar
  4) Transferir
  5) Pagar
  6) Historial
  7) Salir
    `);

    option = await preguntar("\nElige una opción: "); // ← ESPERA la respuesta

    if (option === "1") {
      console.log("💰 Consignando...");
    } else if (option === "2") {
      console.log("💸 Retirando...");
    } else if (option === "3") {
      console.log("🔍 Consultando saldo...");
    } else if (option === "4") {
      console.log("🔄 Transfiriendo...");
    } else if (option === "5") {
      console.log("🧾 Pagando...");
    } else if (option === "6") {
      console.log("📋 Mostrando historial...");
    } else if (option === "7") {
      console.log("👋 ¡Hasta luego!");
    } else {
      console.log("❌ Opción no válida");
    }

  } while (option !== "7"); // ← ahora sí funciona el do...while

  rl.close();
}

main();