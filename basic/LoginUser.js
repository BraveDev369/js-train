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

const newUser = {};

const Name = prompt("Enter your Name: ");

if (Name.length < 3 || Name.length > 10) {
  console.log("Name Must be more than 3 char and less than 10 char !!!");
} else {
  newUser["name"] = Name;
}

const Family = prompt("Enter Your Family: ");

if (Family.length < 3 || Family.length > 15) {
  console.log("Family must be more than 3 char and less than 15 char");
} else {
  newUser["family"] = Family;
}

const Age = +prompt("Enter your Age: ");

console.log(Age, typeof Age);

if (Age) {
  newUser["age"] = Age;
} else {
  console.log("Age must be a valid number !!!");
}

const Email = prompt("Enter your Email: ");

newUser["email"] = Email;

newUser["id"] = 4;

users.push(newUser);
console.table(users);
