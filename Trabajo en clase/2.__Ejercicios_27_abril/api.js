const API = "https://fakeapi.net/products";


function suma (data) {
    let total = 0
  data.forEach(function (value) {
    total += value.price;
    
  });

  console.log(`el total es ${total}`)
}

async function fetchapi() {
  try {
    const response = await fetch(API);
    const data = await response.json();

    suma(data.data)

  } catch (error) {
    console.error("Error al conectarse");
  }
}

fetchapi()
  

