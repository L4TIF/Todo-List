let projectNameContainer;
window.innerWidth < 960 ? projectNameContainer = document.querySelector(".lists") : projectNameContainer = document.querySelector(".lists-lg");
let todoContainer = document.querySelector(".todo-lists");
const taskListName = document.querySelector(".task-list-heading .tasklist-name");

const appendInDom = () => {


  const renderProjectName = (projectName, isFirst = false, setFirstActive = true) => {


    const project = document.createElement("li");
    project.classList.add("task", "btn", "btn-light");
    project.setAttribute("name", projectName.split(" ").join(""));
    project.textContent = projectName;

    // Set the active class if this is the first project
    if (isFirst && setFirstActive) {
      project.classList.add("active");
    }
    // Add event listener to set the active class on click
    project.addEventListener("click", () => {
      Array.from(projectNameContainer.children).forEach(child => child.classList.remove("active"));
      project.classList.add("active");
      // Trigger any additional actions for the active project here
    });

    projectNameContainer.appendChild(project);
  };


  const renderTodo = (projectName, title, desc, dueDate, priority, notes) => {
    const todoItem = `
      <li class="todo btn btn-outline-dark w-100 mb-3" data-project="${projectName.split(" ").join("")}" type="button" data-bs-toggle="collapse" data-bs-target="#todo">
        <div class="new-todo d-flex justify-content-between">           
          <div class="todo-status-icon"><i class="bi bi-circle"></i></div>
          <div class="todo-details w-100 d-flex justify-content-between mx-lg-5 mx-3">
            <div class="todo-title">${title}</div>
            <i class="bi bi-calendar-event todo-due-date">${dueDate}</i>
            <div class="todo-priority"><i class="bi bi-hourglass-split"></i><span class="priority">${priority}</span></div>
          </div>
          <div class="todo-edit wrapper btn-group">
            <i class="bi bi-pencil-square todo-edit" type="button" data-bs-toggle="dropdown" data-bs-display="static"></i>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
              <li><button class="dropdown-item" type="button">Edit</button></li>
              <li><button class="dropdown-item" type="button">Delete</button></li>
            </ul>
          </div>
        </div>
        <div class="collapse" id="todo">
          <div class="todo-body d-flex flex-column align-items-lg-start">
            <div class="todo-desc">${desc}</div>
            <div class="todo-notes">${notes}</div>
          </div>
        </div>
      </li>`;

    todoContainer.innerHTML += todoItem;
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
