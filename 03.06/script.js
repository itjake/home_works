/*1) Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите
на экран строку 'a+b, c+d'.*/

let arr = ['a', 'b', 'c', 'd'];
alert(`${arr[0]}+${arr[1]},  ${arr[2]}+${arr[3]}`);

/*
2) Создайте массив с элементами 10, 15, 9, 10.
- Умножьте первый элемент массива на второй,
  - а третий элемент на четвертый.
  Результаты сложите, присвойте переменной result.
  Выведите на экран значение этой переменной.*/

let secondArr = [10, 15, 9, 10];
let firstAndSecondItems = secondArr[0] * secondArr[1];
let thirdAndFourthItems = secondArr[2] * secondArr[3];
let result = firstAndSecondItems + thirdAndFourthItems;
alert(result);

/*3) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.*/

let thirdArr = ['a', 'b', 'c'];
thirdArr.push('1', '2', '3');
alert(thirdArr);
