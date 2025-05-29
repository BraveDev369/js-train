let num1 = +prompt("Enter first number: ");
let num2 = +prompt("Enter Second Number: ");

let power = 1;
while (num2 != 0) {
  power *= num1;
  num2--;
}

console.log(power);
