const API = "https://fakeapi.net/products?limit=20";

function suma(data) {
  let total = 0;
  
  data.forEach(function (value) {
    total = value.stock * value.price;

    console.log(
      `hay ${value.stock} unidades de ${value.title} que sumadas son ${total.toFixed()}`,
    );
  });
}


function rating (data){

  let mejoresProductos = []

  data.forEach( function (value){

    if ( ( value.rating.rate >= 4.7 ) && ( value.rating.count >= 100 )){

      mejoresProductos.push(value)

    }

  })


return mejoresProductos

}

async function fetchapi() {
  try {
    const response = await fetch(API);
    const data = (await response.json()).data

    console.log(rating(data))

  } catch (error) {
    console.error("Error al conectarse");
  }
}

fetchapi();
