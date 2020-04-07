const todos = ["workout"];

let input = prompt("What would you like to do?");

  
  while(input !== "quit") {
    if(input === 'list') {
      listTodo();
    } else if(input === 'new') {
      addTodo();
    } else if(input === 'delete') {
      deleteTodo();
    }
    // 새로운 todo를 만들면 다시
    input = prompt("What would you like to do?");
  }
  // quit이 되면 여기로 오고 끝.
console.log("OK, You quit the app");

// ===========================================

function listTodo() {
  console.log("***********");
    todos.forEach(function(todo, i) {
      console.log(i + ": " + todo);
    });
    console.log("***********");
}

function addTodo() {
  let newTodo = prompt("Enter new Todo");
      todos.push(newTodo);
      console.log("Added new todo");
}

function deleteTodo() {
  let index = prompt("Enter index of todo to delete");
      todos.splice(index, 1);
      console.log("Deleted todo");
}