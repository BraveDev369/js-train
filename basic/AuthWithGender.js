const age = +prompt("Enter your Age: ");

const gender = +prompt("1. Male\n2. Female\nSelect Your Gender: ");

if (age > 18 && gender === 1) {
  console.log("Welcome :)");
} else {
  console.log("Access Denied :(");
}
