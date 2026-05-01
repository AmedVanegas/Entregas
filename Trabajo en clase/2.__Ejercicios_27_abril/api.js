const API = "https://fakeapi.net/products";

function suma(data) {
  let total = 0;
  data.forEach(function (value) {
    total += value.stock;
  });

  return total;
}

async function fetchapi() {
  try {
    const response = await fetch(API);
    const data = await response.json();
    const total = suma(data.data).toFixed(2)

    console.log(`el valor total es de ${total}`)
  } catch (error) {
    console.error("Error al conectarse");
  }
}

fetchapi();
