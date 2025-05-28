const num1 = +prompt("Enter First Number: ");
const num2 = +prompt("Enter Second Number: ");

const operation = +prompt("Select your operation: \n1- +\n2- -\n3- /\n4- *");

switch (operation) {
  case 1:
    console.log("Result : ", num1 + num2);
    break;
  case 2:
    console.log("Result : ", num1 - num2);
    break;
  case 3:
    console.log("Result : ", (num1 / num2).toFixed(2));
    break;
  case 4:
    console.log("Result : ", num1 * num2);
    break;
  default:
    console.log("Please Enter Valid Value !!!");
    break;
}
