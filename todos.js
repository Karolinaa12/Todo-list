///let input = prompt("What would you like to do?");
//const todos = ["Collect eggs", "Clean room"];
//while (input !== "quit" && input !== "q") {
//if (input == "list") {
//console.log("********");
//for (let i = 0; i < todos.length; i++) {
//  console.log(`${i}: ${todos[i]}`);
// }
//console.log("********");
//}
//input = prompt("What would you like to do?");
//}
//console.log("You quit the app");

let input = prompt("What would you like to do?");
const todos = ["Clean apartment", "Go shopping", "Bake cookies"];

while (input !== "quit" && input !== "q") {
  if (input == "list") {
    console.log("**********");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("**********");
  } else if (input == "new") {
    const newTodo = prompt("Add a to do");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list`);
    console.log(todos);
  } else if (input == "delete") {
    const deleteIndex = parseInt(prompt("Add index to delete"));
    if (!deleteIndex) {
      console.log("Unknown index");
    } else {
      todos.splice(deleteIndex, 1);
      console.log(`Todo number ${deleteIndex} deleted`);
      console.log(todos);
    }
  } else {
    input = prompt("I can't understand. Try again or type q to quit");
  }

  input = prompt("What would you like to do?");
}

console.log("You quit the app");
