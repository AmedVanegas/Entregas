const array = [3, 5, 7, 0, 4, 7, 10, 38, 50, 22, 10, 777, 2, 6];

function ordenarArray(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let u = 0; u < array.length - 1 - i; u++) {
      if (array[u] > array[u + 1]) {
        let temp = array[u];
        array[u] = array[u + 1];
        array[u + 1] = temp;
      }
    }
  }

  return array;
}

console.log(ordenarArray(array));
