import { handleTick } from "./handleInput";

let projectNameContainer;
window.innerWidth < 960 ? projectNameContainer = document.querySelector(".lists") : projectNameContainer = document.querySelector(".lists-lg");
let todoContainer = document.querySelector(".todo-lists");
const taskListName = document.querySelector(".task-list-heading .tasklist-name");

const appendInDom = () => {
  const renderProjectName = (projectName, isFirst = false, activeTask) => {
    const project = document.createElement("li");
    project.classList.add("task", "btn", "btn-light");
    project.setAttribute("name", projectName.split(" ").join(""));
    project.textContent = projectName;

    // Set the active class if this is the first project or if there's an active task
    if (isFirst) {
      project.classList.add("active");
    } else if (activeTask && activeTask.replace(/\s+/g, "") === project.getAttribute("name")) {
      project.classList.add("active");
    }


    projectNameContainer.appendChild(project);
  };

  const renderTodo = (projectName, title, desc, dueDate, priority, notes, isComplete = false) => {
    const id = title.toString().split(" ").join("");
    // Create the main list item
    const todoItem = document.createElement('li');
    todoItem.className = `todo btn ${isComplete ? "bg-dark-subtle" : "btn-outline-dark"} w-100 mb-3`;
    todoItem.dataset.project = projectName.split(" ").join("");
    todoItem.type = "button";
    todoItem.dataset.bsToggle = "collapse";
    todoItem.dataset.bsTarget = `#${id}`;

    // Create the inner structure
    const newTodo = document.createElement('div');
    newTodo.className = "new-todo d-flex justify-content-between";

    const todoStatusIcon = document.createElement('div');
    todoStatusIcon.className = "todo-status-icon";
    const statusIcon = document.createElement('i');
    statusIcon.id = "icon-" + id;

    statusIcon.className = isComplete ? "bi bi-check2-circle" : "bi bi-circle";

    todoStatusIcon.appendChild(statusIcon);
    todoStatusIcon.addEventListener("click", handleTick)


    const todoDetails = document.createElement('div');
    todoDetails.className = "todo-details w-100 d-flex justify-content-between mx-lg-5 mx-3";

    const todoTitle = document.createElement('div');
    todoTitle.className = "todo-title";
    todoTitle.textContent = title;

    const todoDueDate = document.createElement('i');
    todoDueDate.className = "bi bi-calendar-event todo-due-date";
    todoDueDate.textContent = ` ${dueDate}`;

    const todoPriority = document.createElement('div');
    todoPriority.className = "todo-priority";
    const priorityIcon = document.createElement('i');
    priorityIcon.className = "bi bi-hourglass-split";
    todoPriority.appendChild(priorityIcon);
    const prioritySpan = document.createElement('span');
    prioritySpan.className = "priority";
    prioritySpan.textContent = priority;
    todoPriority.appendChild(prioritySpan);

    todoDetails.appendChild(todoTitle);
    todoDetails.appendChild(todoDueDate);
    todoDetails.appendChild(todoPriority);

    const todoEdit = document.createElement('div');
    todoEdit.className = "todo-edit wrapper btn-group";
    const editIcon = document.createElement('i');
    editIcon.className = "bi bi-pencil-square todo-edit";
    editIcon.type = "button";
    editIcon.dataset.bsToggle = "dropdown";
    editIcon.dataset.bsDisplay = "static";

    const dropdownMenu = document.createElement('ul');
    dropdownMenu.className = "dropdown-menu dropdown-menu-end dropdown-menu-lg-start";

    const editItem = document.createElement('li');
    const editButton = document.createElement('button');
    editButton.className = "dropdown-item";
    editButton.type = "button";
    editButton.textContent = "Edit";
    editItem.appendChild(editButton);

    const deleteItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.className = "dropdown-item";
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteItem.appendChild(deleteButton);
    // todo delete event listner

    dropdownMenu.appendChild(editItem);
    dropdownMenu.appendChild(deleteItem);
    todoEdit.appendChild(editIcon);
    todoEdit.appendChild(dropdownMenu);

    newTodo.appendChild(todoStatusIcon);
    newTodo.appendChild(todoDetails);
    newTodo.appendChild(todoEdit);
    todoItem.appendChild(newTodo);

    // Create the collapsible body
    const collapseDiv = document.createElement('div');
    collapseDiv.className = "collapse";
    collapseDiv.id = id;

    const todoBody = document.createElement('div');
    todoBody.className = "todo-body d-flex flex-column align-items-lg-start";

    const hr1 = document.createElement('hr');
    const descDiv = document.createElement('div');
    descDiv.className = "todo-desc";
    descDiv.innerHTML = `<div>Description</div>${desc}`;

    const hr2 = document.createElement('hr');
    const notesDiv = document.createElement('div');
    notesDiv.className = "todo-notes";
    notesDiv.innerHTML = `<div>Notes</div>${notes}`;

    todoBody.appendChild(hr1);
    todoBody.appendChild(descDiv);
    todoBody.appendChild(hr2);
    todoBody.appendChild(notesDiv);
    collapseDiv.appendChild(todoBody);
    todoItem.appendChild(collapseDiv);

    // Append the todo item to the container
    todoContainer.appendChild(todoItem);
  };


  const setTaskListName = (projectName = "No Active list") => {
    taskListName.textContent = projectName
    console.log(projectName)
  }




  // Clear the todo container
  const clearTodoContainer = () => {
    todoContainer.innerHTML = "";  // Clear the container before adding new todos
    console.log("Todo container cleared.");
  };

  const clearHTMLContainers = () => {
    projectNameContainer.replaceChildren();

  };

  const getActiveTask = () => {
    const activeTask = Array.from(projectNameContainer.children).find(element => element.classList.contains("active"));
    if (!activeTask) {
      document.querySelector(".add-task-container").classList.add("d-none")
      console.warn("No active task found.");
      return null;  // Explicitly return null if no active task
    }
    document.querySelector(".add-task-container").classList.remove("d-none")
    return activeTask;
  };

  return { renderProjectName, renderTodo, clearHTMLContainers, getActiveTask, clearTodoContainer, setTaskListName };
};

export { appendInDom };
