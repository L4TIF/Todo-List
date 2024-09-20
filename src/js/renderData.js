const appendInDom = () => {
    let projectNameContainer;
    window.innerWidth < 960 ? projectNameContainer = document.querySelector(".lists") : projectNameContainer = document.querySelector(".lists-lg");
    let todoContainer = document.querySelector(".todo-lists");

    // methods

    // append project name
    const renderProjectName = (projectname) => projectNameContainer.innerHTML += `<li class="task btn btn-light" id="new-task">${projectname}</li>`;


    // append todo
    const renderTodo = (title, desc, dueDate, priority, notes) => {

        todoContainer.innerHTML += `  <li class="todo btn btn-outline-dark w-100 mb-3"  type="button" data-bs-toggle="collapse" data-bs-target="#todo">
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

    return { renderProjectName, renderTodo }
};

const renderData = (projectName, todoObj) => {
    const Dom = appendInDom(); //initialize append method

    Dom.renderProjectName(projectName); //set project name
    todoObj.forEach(e => {
        Dom.renderTodo(e.title,e.desc,e.dueDate,e.priority,e.notes) //set todos
    }); 
}



export { renderData, appendInDom };