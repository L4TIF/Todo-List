import { getAllProjects } from "./LocalStorage";
import { appendInDom, getActiveTask, renderData } from "./renderData";

// Function to render the project name
const listDataProject = (objOfData) => {
    const { projectName } = objOfData;
    const r = renderData();
    r.renderTaskList(projectName);
}

// Function to render todos if the active project matches
const listDataTodo = (objOfData) => {
    const domAppender = appendInDom();
    const r = renderData();
    const { projectName, ...todosList } = objOfData;

    const activeTask = domAppender.getActiveTask();  // Get active task once
    if (!activeTask) {
        console.log("No active task found.");
        return;
    }

    const activeTaskName = activeTask.getAttribute("name");
    const formattedProjectName = objOfData.projectName.split(" ").join("");  // Remove spaces from project name

    console.log(activeTask);
    console.log(activeTaskName, formattedProjectName);

    if (activeTaskName === formattedProjectName) {
        r.renderTodos(projectName, todosList.todos);  // Render todos if the project matches
    }
}

// Function to loop through all projects and render project names
const loopData = () => {
    const data = getAllProjects() ?? [];  // Default to an empty array
    const domAppender = appendInDom();    // Get the DOM appender instance
    domAppender.clearHTMLContainers();    // Clear HTML containers

    if (data.length > 0) {
        data.forEach(dataObj => listDataProject(dataObj));  // Loop through projects
    } else {
        console.log("No projects found.");
    }
}

// Function to loop through all projects and render todos if the project is active
const loopDataTodo = () => {
    const data = getAllProjects() ?? [];  // Default to an empty array
    const domAppender = appendInDom();    // Get the DOM appender instance
    domAppender.clearHTMLContainers();    // Clear HTML containers

    if (data.length > 0) {
        data.forEach(dataObj => listDataTodo(dataObj));  // Loop through projects and check for active tasks
    } else {
        console.log("No projects found.");
    }
}

export { loopData, loopDataTodo };
