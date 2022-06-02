let questionOne = prompt("Столица Кыргызстана?");
let questionTwo = prompt("Столица России?");
let amountOfRightAnswers = 0;

if (questionOne === "Бишкек") {
  amountOfRightAnswers++;
}
if (questionTwo === "Москва") {
  amountOfRightAnswers++;
}

alert(amountOfRightAnswers);
