/*1) Напишите функцию hello(), которая при вызове будет возвращать строку
   «Привет, JavaScript!»*/

function getHello() {
  alert("Привет, JavaScript!");
}

getHello();

/*
2) Нужно создать функцию, которая будет выводить куб числа на страничку.
  Число должно передаваться параметром.*/

function calcCube(num) {
  alert(num * num * num);
}

calcCube(2);

/*
3) Напишите функцию getName(), которая при вызове будет принимать переменную
name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
В случае отсутствующего параметра выводить «Привет, гость»*/

function getName(name) {
  if (name) {
    alert(`Привет, ${name}`);
  } else {
    alert(`Привет, гость`);
  }
}

let name = "Василий";
getName(name);

/****************/

function showSum(arrayFirst, arraySecond) {
  let resArrayFirst = 0;
  let resArraySecond = 0;

  for (let key of arrayFirst) {
    if (typeof key !== "number") continue;
    resArrayFirst += key;
  }

  for (let keyTwo of arraySecond) {
    if (typeof keyTwo !== "number") continue;
    resArraySecond += keyTwo;
  }

  alert(resArrayFirst + resArraySecond);
}

showSum([1, 2, 3, 4, 5], [5, 6, 7, 8, 9, 10]);