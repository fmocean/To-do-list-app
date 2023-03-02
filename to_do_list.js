const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Function to add task to list
function addTask() {
  const taskText = taskInput.value;
  if (taskText === "") {
    return;
  }

  // Create task element
  const taskEl = document.createElement("li");
  const taskSpan = document.createElement("span");
  taskSpan.innerText = taskText;
  taskEl.appendChild(taskSpan);

  // Create delete button element
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", deleteTask);
  taskEl.appendChild(deleteBtn);

  // Add task element to list
  taskList.appendChild(taskEl);

  // Clear input field
  taskInput.value = "";
}

// Function to delete task from list
function deleteTask(event) {
  const taskEl = event.target.parentElement;
  taskList.removeChild(taskEl);
}

// Add event listener for add button
addBtn.addEventListener("click", addTask);

// Add event listener for input field enter key
taskInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addBtn.click();
  }
});

// Add event listener for task completion
taskList.addEventListener("click", function(event) {
  if (event.target.tagName === "SPAN") {
    event.target.classList.toggle("completed");
  }
});
