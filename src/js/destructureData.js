import { getAllProjects } from "./LocalStorage";
import { appendInDom } from "./renderData";


// Function to render the project name
const listDataProject = (projectName, isFirst = false, setFirstActive) => {
    const r = appendInDom();
    r.renderProjectName(projectName, isFirst, setFirstActive); // Pass the isFirst parameter if needed
};

// Function to render todos for the active project
const listDataTodo = (activeTask, todosList) => {
    const dom = appendInDom();
    dom.renderTodo(activeTask.getAttribute("name"), todosList.todos);
}

// Function to loop through all projects and render project names and todos if active
const loopData = (setFirstActive = true) => {
    const data = getAllProjects() ?? [];
    const domAppender = appendInDom();
    domAppender.clearHTMLContainers();

    if (data.length > 0) {
        data.forEach((dataObj, index) => {
            if (setFirstActive)
                listDataProject(dataObj.projectName, index === 0); // Set active state for the first project
            else
                listDataProject(dataObj.projectName); // Set active state for the first project
        });
        console.log("Projects rendered:", data.map(d => d.projectName).join(", "));
        loopDataTodo();
    } else {
        console.warn("No projects found.");
    }
};



// Function to loop through all projects and render todos if the project is active
const loopDataTodo = () => {
    const data = getAllProjects() ?? [];  // Default to an empty array
    const domAppender = appendInDom();    // Get the DOM appender instance
    const activeTask = domAppender.getActiveTask();  // Get the active task (project)
    domAppender.clearTodoContainer();
    if (!activeTask) {
        console.log("No active task found.");
        domAppender.setTaskListName();
        return;
    }

    const activeTaskName = activeTask.getAttribute("name").replace(/\s+/g, "");  // Get the active task's name
    console.log("Active Task Name:", activeTaskName);

    // Find the matching project
    const matchedProject = data.find(dataObj => {
        const formattedProjectName = dataObj.projectName.split(" ").join("");  // Format the project name
        console.log(`Checking project: ${formattedProjectName}`);
        return formattedProjectName === activeTaskName;
    });


    if (matchedProject) {
        domAppender.setTaskListName(matchedProject.projectName);
        console.log("Matched project:", matchedProject);  // Add this line to inspect the matched project
        domAppender.clearTodoContainer();
        if (matchedProject.todos) {
            matchedProject.todos.forEach(todo => {
                domAppender.renderTodo(matchedProject.projectName, todo.title, todo.desc, todo.dueDate, todo.priority, todo.notes);

            })
        } else {
            console.log("todosList or todos array is missing or invalid.");
            console.log("Matched project todosList:", matchedProject.todosList);  // Log the actual todosList object
        }
    } else {
        console.log("No matching project for the active task.");
    }
};



export { loopData, loopDataTodo };
