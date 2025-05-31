/**
 * get many number for clc sum
 */

const myArray = [];

let number = 0;
while (number != -1) {
  number = +prompt("Enter A number: \n -1 for clac sum");
  if (number != -1) {
    myArray.push(number);
  }
}

let sum = 0;

myArray.forEach((i) => (sum += i));

console.log("Sum of Numbers: ", sum);
