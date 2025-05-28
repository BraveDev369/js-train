/**
 * get username , password
 * username length must be more than 3 char
 * password length must be more than 8 char
 */

const username = prompt("Enter Username: ");
const password = prompt("Enter Password: ");

if (username.length > 3 || password.length > 8) {
  console.log("Welcome :)");
} else {
  console.log(
    "username length must be more than 3 char\npassword length must be more than 8 char"
  );
}
