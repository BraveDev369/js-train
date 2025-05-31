/**
 * use Flag variable for check user login
 */

const username = prompt("Enter username: ");

const users = ["Fateme", "Mohamad", "Hadi", "Asal"];

const isLogin = users.some((user) => user === username);

if (isLogin) {
  console.log("Welcome :)");
} else {
  console.log("User not found, please sign up !");
}
