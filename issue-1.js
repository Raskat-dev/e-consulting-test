// 1.
// Есть массив натуральных чисел. Нужно в нем отсортировать четные числа по возрастанию, а нечетные по убыванию. Расположение чисел чет/нечет должно остаться, как в исходном.
// Было:  1 2 7 5 6 8 4
// Стало:  7 2 5 1 4 6 8

let array = [1, 2, 7, 5, 6, 8, 4];

const arrSort = (arr) => {
  if (Array.isArray(arr)) {
    let even = [];
    let odd = [];

    for (let i = 0; i < arr.length; i++) {
      arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
    }
    even.sort((a, b) => a - b);
    odd.sort((a, b) => b - a);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        arr[i] = even[0];
        even.splice(0, 1);
      } else {
        arr[i] = odd[0];
        odd.splice(0, 1);
      }
    }
    return arr;
  } else {
    console.log("функция arrSort должна принимать ряд");
  }
};

arrSort(array);
console.log(array);
