/**
 * todo list with 3 action: Add, delete and Mark todo
 */

let todos = [
  { id: 1, title: "Buy milk", done: false },
  { id: 2, title: "Go to gym", done: false },
  { id: 3, title: "Read a book", done: false },
];

function mainMenu() {
  const action = +prompt(
    "Select an action:\n1. Add Todo\n2. Delete Todo\n3. Mark Todo as Done"
  );

  switch (action) {
    case 1:
      const newTitle = prompt("Enter the title of the new todo:");
      if (newTitle) {
        const newTodo = {
          id: todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1,
          title: newTitle,
          done: false,
        };
        todos.push(newTodo);
        alert("Todo added successfully!");
      }
      break;

    case 2:
      const deleteTitle = prompt("Enter the title of the todo to delete:");
      const beforeLength = todos.length;
      todos = todos.filter((todo) => todo.title !== deleteTitle);
      if (todos.length < beforeLength) {
        alert("Todo deleted successfully!");
      } else {
        alert("Todo not found!");
      }
      break;

    case 3:
      const doneTitle = prompt("Enter the title of the todo to mark as done:");
      const found = todos.find((todo) => todo.title === doneTitle);
      if (found) {
        found.done = true;
        alert("Todo marked as done!");
      } else {
        alert("Todo not found!");
      }
      break;

    default:
      alert("Invalid option selected.");
  }

  console.table(todos);

  const again = confirm("Do you want to perform another action?");
  if (again) mainMenu();
}

console.table(todos);

mainMenu();
