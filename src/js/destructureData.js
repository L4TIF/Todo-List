import { getAllProjects } from "./LocalStorage";
import { appendInDom } from "./renderData";


// Function to render the project name
const listDataProject = (projectName, isFirst = false,  activeTask) => {
    const r = appendInDom();
    r.renderProjectName(projectName, isFirst,  activeTask); // Pass the isFirst parameter if needed
};

// Function to render todos for the active project
const listDataTodo = (activeTask, todosList) => {
    const dom = appendInDom();
    dom.renderTodo(activeTask.getAttribute("name"), todosList.todos);
}

// Function to loop through all projects and render project names and todos if active
const loopData = (setFirstActive = true, activeTaskName = null) => {
    const data = getAllProjects() ?? [];
    const domAppender = appendInDom();
    domAppender.clearHTMLContainers();

    if (data.length > 0) {
        data.forEach((dataObj, index) => {
            const isActive = setFirstActive && index === 0;
            listDataProject(dataObj.projectName, isActive, activeTaskName);
        });
        console.log("Projects rendered:", data.map(d => d.projectName).join(", "));

        // After rendering projects, check for an active project
        const activeTask = domAppender.getActiveTask();
        if (activeTask) {
            const matchedProject = data.find(dataObj => {
                const formattedProjectName = dataObj.projectName.split(" ").join("");
                return formattedProjectName === activeTask.getAttribute("name").replace(/\s+/g, "");
            });

            if (matchedProject) {
                listDataTodo(activeTask, matchedProject); // Render todos for the active project
            }
        }
    } else {
        console.warn("No projects found.");
    }
};



const loopDataTodo = () => {
    const data = getAllProjects() ?? [];
    const domAppender = appendInDom();
    const activeTask = domAppender.getActiveTask(); // Get the active project
    console.log("data while looping todo", data)
    domAppender.clearTodoContainer();

    if (!activeTask) {
        console.log("No active task found.");
        domAppender.setTaskListName();
        return; // Exit if no active project
    }

    const activeTaskName = activeTask.getAttribute("name").replace(/\s+/g, ""); // Get the active task's name

    const matchedProject = data.find(dataObj => {
        const formattedProjectName = dataObj.projectName.split(" ").join(""); // Format the project name
        return formattedProjectName === activeTaskName;
    });

    if (matchedProject) {
        domAppender.setTaskListName(matchedProject.projectName);
        console.log("Matched project:", matchedProject);

        if (matchedProject.todos) {
            matchedProject.todos.forEach(todo => {

                domAppender.renderTodo(matchedProject.projectName, todo.title, todo.desc, todo.timeLeft, todo.priority, todo.notes, todo.isComplete);
            });
        } else {
            console.log("No todos found for the matched project.");
        }
    } else {
        console.log("No matching project for the active task.");
    }
};



export { loopData, loopDataTodo };
