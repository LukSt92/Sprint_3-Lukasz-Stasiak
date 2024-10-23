const number1 = 99;
const number2 = 7;
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
      console.log(
        "Działanie nie może być wykonane z powodu dzielenia przez zero."
      );
      break;
    }
    result = number1 / number2;
    break;
  default:
    console.log("Wybrano nieprawidłową operację.");
}
if (
  (operationType === "+" ||
    operationType === "-" ||
    operationType === "*" ||
    operationType === "/") &&
  number2 !== 0
) {
  const evenOrOdd = result % 2 === 0 ? "parzysty" : "nieparzysty";
  console.log(`Wynik operacji to: ${result}, który jest ${evenOrOdd}.`);
}
