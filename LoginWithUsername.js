const defaultUsername = "ali";

const username = prompt("Enter Your Username: ");

const lowerUsername = username.toLowerCase();

if (defaultUsername === lowerUsername) {
  console.log("Welcome :)");
} else {
  console.log("Username doesn't exist !!!");
}
