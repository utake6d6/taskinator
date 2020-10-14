var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  
  // holds the code that creates a new task HTML element
  var createTaskEl = function(taskDataObj) {

    // check if input values are empty strings
  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }

  formEl.reset();

  // package up data as an object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  // send it as an argument to createTaskEl
  createTaskEl(taskDataObj);

    // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
  }

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = taskNameInput;
  tasksToDoEl.appendChild(listItemEl);
};

  formEl.addEventListener("submit", taskFormHandler); {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = taskNameInput;
  tasksToDoEl.appendChild(listItemEl);
};

// // taskDataObj
// {
//   name: "Task's name",
//   type: "Task's type"
// }


// outline - refactor the code:

// 1.Rename the handler function to be a more specific to the event it's handling.

// 2.Create a new function to take in the task's name and title as 'arguments' - create the HTML elements that get added to the page.

// 3.Move the code that creates and adds HTML elements from the handler function into the newly created function "arguments"

// 4.Update the handler function to send the task name and type values from the form to the newly created function.



// console.log(var, etc.);
// console.dir(var, etc.);