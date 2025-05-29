const employees = [
  { id: 1, name: "Ali", tasks: ["Prepare report", "Send email"] },
  { id: 2, name: "Mohammad", tasks: ["Fix bugs"] },
  { id: 3, name: "Sara", tasks: ["Design homepage"] },
  { id: 4, name: "Zahra", tasks: ["Update database", "Review PRs"] },
];

const task = prompt("Enter your task title:");

let employeesText = "";

employees.forEach((emp) => {

  let empTask = "";

  emp.tasks.forEach((task) => {
    empTask += task;
  });

  employeesText += emp.id + "-" + emp.name + " == Tasks: " + empTask + "\n";
});


const empName = prompt(`${employeesText}Enter employee name for set Task: `);

let exist = false;

const emp = employees.forEach((emp) => {
  if (emp.name.toLowerCase === empName.toLowerCase) {
    exist = true;
    emp.tasks.push(task);
  }
});

if (exist) {
  console.log("Task set successfully :)");
  console.log(employees);
} else {
  console.log("Employee Not Found !!!");
}
