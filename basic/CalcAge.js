/**
 * get year of birth and show age
 */

const year = +prompt("Enter year of birth: ", 1370);

if (year) {
  console.log("Your Age : ", 1404 - year);
} else {
  console.log("Please Enter a valid number !!!");
}
