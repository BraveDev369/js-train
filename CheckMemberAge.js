const users = [
  {
    id: 1,
    name: "Mohamad",
    family: "ahmadi",
    age: 25,
    email: "mohamad@gmail.com",
  },
  { id: 2, name: "Fateme", family: "Es", age: 33, email: "fateme@gmail.com" },
  { id: 3, name: "Ali", family: "Karimi", age: 25, email: "ali@gmail.com" },
];

const check = users.every((user) => {
  return user.age > 18;
});

if (check) {
  console.log("Connection Available :)");
} else {
  console.log("Sorry, Access Denide !!!");
}
