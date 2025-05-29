let num1 = +prompt("Enter first Number: ");
let num2 = +prompt("Enter second Number: ");

if (num1 > num2) {
  if (num2 % 2 !== 0) {
    num2++;
  }
  while (num2 <= num1) {
    console.log(num2);
    num2 += 2;
  }
} else {
  if (num1 % 2 !== 0) {
    num1++;
  }
  while (num1 <= num2) {
    console.log(num1);
    num1 += 2;
  }
}
