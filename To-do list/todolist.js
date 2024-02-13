// let formButton = document.getElementById("buttonAdd");
// let formOne = document.getElementById("form1");
// let formTwo = document.getElementById("form2");
// formCount = 0;
// formButton.addEventListener("click", function (e) {
//   if (e.target) {
//     formCount++;
//     formOne.style.display = "flex";
//     formButton.innerText = "Add another form 🎯";
//   }
//   if (formCount === 2) {
//     formTwo.style.display = "flex";
//     formButton.style.display = "none";
//   }
// });

let todoForm = document.getElementById("todoForm");
let todoInput = document.getElementById("inputBox");
let TaskContainer = document.getElementById("recievingContainer");

let uncheckIcon = document.getElementById("unchecked");
let checkIcon = document.getElementById("checked");

let todoItems = [];

todoForm.addEventListener("submit", createTodo);

// This function collects the todo from our inputs and save in the Local storage
function createTodo(event) {
  event.preventDefault();
  let todoEntered = todoInput.value;
  if (todoEntered.length == 0) {
    alert("You must a todo value");
  } else {
    const todoFromUser = {
      todoInputed: todoEntered,
      checked: false,
    };
    todoItems.push(todoFromUser);
    todoForm.reset();
    localStorage.setItem("todo", JSON.stringify(todoItems));
    fetchTodo();
    ShowEnteredTodo();
  }
}

// Now we create a function that will fetch those todos from the local storage
function fetchTodo() {
  if (localStorage.getItem("todo")) {
    todoItems = JSON.parse(localStorage.getItem("todo"));
  }
}
fetchTodo();

function ShowEnteredTodo() {
  TaskContainer.innerHTML = "";
  todoItems.forEach(function (eachTodos, index) {
    let printTodo = eachTodos.todoInputed;

    let todoItem = document.createElement("div");
    todoItem.classList.add("tasks");
    todoItem.setAttribute("id", `${index}`);

    let unCheck = document.createElement("i");
    unCheck.classList.add("fa-regular", "fa-circle-dot");
    unCheck.setAttribute("id", "unchecked");

    let check = document.createElement("i");
    check.classList.add("fa-solid", "fa-circle-dot");
    check.setAttribute("id", "checked");

    let todoText = document.createElement("p");
    todoText.innerText = printTodo;

    let editTodo = document.createElement("i");
    editTodo.classList.add("fa-regular", "fa-pen-to-square");
    editTodo.setAttribute("id", "edit");

    let deleteTodo = document.createElement("i");
    deleteTodo.classList.add("fa-regular", "fa-trash-can");
    deleteTodo.setAttribute("id", "delete");
    if (!eachTodos.checked) {
      todoItem.append(unCheck, todoText, editTodo, deleteTodo);
      TaskContainer.append(todoItem);
    } else {
      todoItem.append(check, todoText, editTodo, deleteTodo);
      TaskContainer.append(todoItem);
    }
  });
}

ShowEnteredTodo();

TaskContainer.addEventListener("click", function (event) {
  let userTarget = event.target;
  let todoList = userTarget.parentElement;
  // console.log(userTarget);
  console.log(todoList);
});
