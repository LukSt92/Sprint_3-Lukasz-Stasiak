const number1 = 70;
const number2 = 0;
const operationType = "/";
let result;
switch (operationType) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    if (number2 === 0) {
      result = "Działanie nie może być wykonane z powodu dzielenia przez zero.";
      break;
    }
    result = number1 / number2;
    break;
  default:
    result = "Wybrano nieprawidłową operację.";
}
let answer;
if (typeof result === "string") answer = result;
else {
  const evenOrOdd = result % 2 === 0 ? "parzysty" : "nieparzysty";
  answer = `Wynik operacji to: ${result}, który jest ${evenOrOdd}.`;
}
console.log(answer);
