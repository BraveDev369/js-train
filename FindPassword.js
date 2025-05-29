const users = [
  { username: "Mohamad", password: 123456 },
  { username: "ali", password: "abcdef" },
  { username: "hamed", password: "569874" },
  { username: "fateme", password: "aabbcc" },
];

const username = prompt("Enter your username: ");

const user = users.find((user) => {
  return user.username === username;
});

if (user) {
  console.log("Your password : ", user.password);
} else {
  console.log("User not found :(");
}
