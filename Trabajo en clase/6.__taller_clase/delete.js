const array = [2, 2, 3, 3, 3, 4, 5];

function deleteR(list) {
  for (let i = 1; i < list.length; i++) {
    let temp = list[i - 1];
    if (temp === list[i]) {
      list.splice(i, 1);

      i--;
    }
  }

  console.log(list);
}

deleteR(array);
