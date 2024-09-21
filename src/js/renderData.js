let projectNameContainer;
window.innerWidth < 960 ? projectNameContainer = document.querySelector(".lists") : projectNameContainer = document.querySelector(".lists-lg");
let todoContainer = document.querySelector(".todo-lists");
const appendInDom = () => {

  // methods

  // append project name
  const renderProjectName = (projectname) => {
    // projectNameContainer.innerHTML += `<li class="task btn btn-light" data-project="${projectname.split(" ").join("")}" >${projectname}</li>`
    const project = document.createElement("li");
    project.classList.add(`task`, `btn`, `btn-light`);
    project.setAttribute("name", projectname.split(" ").join(""));
    project.textContent = projectname;
    projectNameContainer.appendChild(project);
    projectNameContainer.firstChild.classList.add("active");
  };


  // append todo
  const renderTodo = (projectname, title, desc, dueDate, priority, notes) => {

    todoContainer.innerHTML += `  <li class="todo btn btn-outline-dark w-100 mb-3 " data-project="${projectname.split(" ").join("")}"  type="button" data-bs-toggle="collapse" data-bs-target="#todo">
              <!-- button -->
              <div
                class="new-todo d-flex justify-content-between">           
             
                <div class="todo-status-icon"><i class="bi bi-circle"></i></div>
                <div class="todo-details w-100 d-flex justify-content-between mx-lg-5 mx-3">
                <div class="todo-title">${title}</div>
                <i class="bi bi-calendar-event todo-due-date">${dueDate}</i>
                <div class="todo-priority"><i class="bi bi-hourglass-split"></i><span class="priority">${priority}</span></div>
              </div>

              <div class="todo-edit wrapper btn-group">
                <i class="bi bi-pencil-square todo-edit" type="button" data-bs-toggle="dropdown" data-bs-display="static"></i>
                <ul class="dropdown-menu dropdown-menu-end  dropdown-menu-lg-start">
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
            </li>`
  }
  const clearHTMLContainers = () => {   //empty containers
    projectNameContainer.replaceChildren();
    todoContainer.replaceChildren();
    console.log("all containers refreshed")
  }



  const getActiveTask = () => {
    for (const element of projectNameContainer.children) {
      if (element.classList.contains("active"))
        return element
    }
  }




  return { renderProjectName, renderTodo, clearHTMLContainers,getActiveTask }
};

const renderData = (projectName, todoObj = []) => {
  const Dom = appendInDom(); //initialize append method


  const renderTaskList = (projectName) => {
    Dom.renderProjectName(projectName); //set project name
  }



  const renderTodos = (projectName, todoObj) => {

    todoObj.forEach(e => {
      Dom.renderTodo(projectName, e.title, e.desc, e.dueDate, e.priority, e.notes) //set todos
    });
  }






  return { renderTaskList, renderTodos }
}















export { renderData, appendInDom, };