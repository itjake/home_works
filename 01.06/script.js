/*1) Создайте объект заработных плат.
  Назовите userSalaries.
  Свойствами выступают: Ella, Sophia, Ellie
Выведите на экран зарплату Ella, Sophia.*/

let userSalaries = {
  Ella: 1000,
  Sophia: 2000,
  Ellie: 3000
}

alert(userSalaries.Ella);
alert(userSalaries.Sophia);

/*2) Создайте объект с ключами a, b и c значениями 5 , 6 и 10.
Найдите сумму его элементов.*/

let sum = {
  a: 5,
  b: 6,
  c: 10
};

alert(sum.a + sum.b + sum.c);

/*
3) let number;
if(data === true){
  number = 3;
} else{
  number = 5;
}

Сделайте рефакторинг кода, с помощью тернарного оператора.*/

let data = true;
let number = data ? 3 : 5;

alert(number);