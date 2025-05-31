/**
 * get a number and sum any numbers of number
 * 124 => 1 + 2 + 4 = 7
 */

const number = prompt("Enter a number: ");

let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum += +number[i];
}

if (sum) {
  console.log("Result : ", sum);
} else {
  console.log("Please Enter a valid number !!!");
}
