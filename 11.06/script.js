/*
1) На старте вы получаете массив. Необходимо написать функцию, которая будет
показывать массив удвоенных значений исходного массива.
  Пример кода:
  example([1, 2, 3]) => [2, 4, 6]
example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4]*/

function getSquare(arr) {
  let resArr = [];
  for (let double of arr) {
    double *= 2
    resArr.push(double);
  }
  console.log(resArr);
}

let arr = [1, 2, 3];
let arr2 = [4, 1, 1, 1, 4];
let arr3 = [2, 2, 2, 2, 2, 2];

getSquare(arr);

/*2) Имеется массив с элементами 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20;
Нужно найти перебирая эти элементы с помощью цикла четные числа.
И эти найденные четные числа должны быть собраны в одном массиве.*/


function getEven(oldArr) {
  let newArr = [];
  let oddArr = [];
  let mixObj = {};
  for (let i = 0; i < oldArr.length; i++) {
    if (i % 2 == 0) {
      newArr.push(i);
    } else {
      oddArr.push(i);
    }
  }
  console.log(newArr);
  console.log(oddArr);
  mixObj.even = newArr;
  mixObj.odd = oddArr;
  console.log(mixObj);
}

let oldArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
getEven(oldArr);

