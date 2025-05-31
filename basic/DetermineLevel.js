const gpa = +prompt("Enter Your GAP :");


if (gpa >= 18 && gpa <= 20) {
  console.log("You are A Level :)");
} else if (gpa >= 15 && gpa <= 18) {
  console.log("You are B Level :|");
} else if (gpa >= 12 && gpa <= 15) {
  console.log("You are C Level :/");
} else if (gpa < 12) {
  console.log("Sorry your are Conditional :(");
} else {
  console.log("Please Enter number between 0 and 20. Ty");
}
