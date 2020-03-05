const todos = ["workout"];

let input = prompt("What would you like to do?");

  
  while(input !== "quit") {
    if(input === 'list') {
      console.log(todos);
    } else if(input === 'new') {
    let newTodo = prompt("Enter new Todo");
      todos.push(newTodo);
    }
    // quit이면 바로 여기루
    input = prompt("What would you like to do?");
  }
console.log("OK, You quit the app");