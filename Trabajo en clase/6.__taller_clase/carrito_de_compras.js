const productos = [
  { producto: "Laptop", precio: 1200, cantidad: 2, descuento: 10 },
  { producto: "Mouse inalámbrico", precio: 35, cantidad: 5, descuento: 0 },
  { producto: 'Monitor 27"', precio: 450, cantidad: 1, descuento: 15 },
  { producto: "Teclado mecánico", precio: 85, cantidad: 3, descuento: 5 },
  { producto: "Webcam HD", precio: 60, cantidad: 2, descuento: 0 },
];



function totalCarrito2(array) {


    total = 0
  array.forEach(function (value, position) {

    let producto = array[position]

    let productoSinDescuento = producto.precio * producto.cantidad

    let descuento = productoSinDescuento*(producto.descuento/100)

    total += productoSinDescuento - descuento


  });

  console.log(`el total es $${total} bsjnkdnklasdnaskl bofff
    `)
}


totalCarrito2(productos)