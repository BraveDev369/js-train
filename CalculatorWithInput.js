const num1 = parseFloat(prompt("Enter the first number:"));

const operator = parseInt(
  prompt(
    "Choose an operation:\n1 - Addition\n2 - Subtraction\n3 - Multiplication\n4 - Division"
  )
);

const num2 = parseFloat(prompt("Enter the second number:"));

let result;

switch (operator) {
  case 1:
    result = num1 + num2;
    break;
  case 2:
    result = num1 - num2;
    break;
  case 3:
    result = num1 * num2;
    break;
  case 4:
    if (num2 === 0) {
      result = "Cannot divide by zero";
    } else {
      result = num1 / num2;
    }
    break;
  default:
    result = "Invalid operation";
}

console.log("Result:", result);
