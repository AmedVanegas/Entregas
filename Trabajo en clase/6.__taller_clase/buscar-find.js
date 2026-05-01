const inventario = [
  { nombre: "manzanas", cantidad: 2 },
  { nombre: "bananas", cantidad: 0 },
  { nombre: "cerezas", cantidad: 5 },
];

const encontrado = inventario.find(function (fruta) {
  return fruta.nombre === "cerezas";
})

console.log( encontrado );