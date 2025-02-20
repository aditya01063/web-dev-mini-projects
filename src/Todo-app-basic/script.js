const taskToAdd = document.getElementById("task-to-add");
const addBtn = document.getElementById("add-task");
const container = document.querySelector(".task-container");
addBtn.addEventListener("click", addTask);
let todoArray = [];

function addTask() {
  if (taskToAdd.value === "") {
    console.log("no task added");
  } else {
    let task = taskToAdd.value;
    todoArray.push(task);
    taskToAdd.value = "";
    renderTodo(task);
  }
}

function renderTodo(task) {
  let createDiv = document.createElement("div");
  createDiv.innerText = task;
  createDiv.classList.add("added-item");
  let createImg = document.createElement("img");
  createImg.src = "trash-icon.png";
  createImg.classList.add("trash-img");
  // adding event listner while creating the div
  //   createImg.addEventListener('click', function() {
  //     createDiv.remove()
  //   })
  createDiv.appendChild(createImg);
  container.appendChild(createDiv);
}

// Event Delegation adding event listner on the container
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("trash-img")) {
    e.target.parentNode.remove();
  } else if (e.target.classList.contains("added-item")) {
    e.target.classList.toggle("toggle-completed");
  }
});
