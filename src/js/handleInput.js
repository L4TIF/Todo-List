import { createProject } from "./createProject";
import { loopData, loopDataTodo } from "./destructureData";
import { updateLocalData, getAllProjects, setLocalData } from "./LocalStorage";
import { appendInDom } from "./renderData";

let addProjectContainer;
window.innerWidth < 960
    ? addProjectContainer = document.querySelector(".project-container-sm")
    : addProjectContainer = document.querySelector(".project-container-lg");

const addTodoContainer = document.querySelector(".todo-container");

let project; // New project object

addProjectContainer.addEventListener("click", (element) => {
    let identifier = element.target.className;

    switch (true) {
        case identifier.includes("create-new-project"):
            setNewProject();

            break;

        case identifier.includes("task"):
            let allTasks = element.target.parentNode.childNodes;
            allTasks.forEach(child => child.classList.remove("active"));
            element.target.classList.add("active");
            loopDataTodo();  // Render todos for the selected task
            break;

        default:
            console.log("Invalid click");
            break;
    }
});
const setNewProject = () => {
    let projectName = addProjectContainer.querySelector(".project").value.trim();  // Trim whitespace
    if (projectName === "") {
        console.log("Project name cannot be empty.");
        return;  // Prevent creating a project with an empty name
    }

    // Check if the project name already exists
    const existingProjects = getAllProjects() ?? [];
    if (existingProjects.some(proj => proj.projectName === projectName)) {
        console.log("Project name already exists.");
        return;
    }

    // Create the new project
    project = createProject(projectName);
    updateLocalData(project.getProjectName());
    addProjectContainer.querySelector(".project").value = ""; // Empty input box

    // Re-render the project list
    loopData(false); // Don't automatically set the first project as active

    // Find the newly created project after re-rendering
    const newlyCreatedTask = Array.from(document.querySelectorAll(".task"))
        .find(task => task.getAttribute("name").replace(/\s+/g, "") === projectName.split(" ").join(""));

    // Set the newly created project as active
    if (newlyCreatedTask) {
        Array.from(document.querySelectorAll(".task")).forEach(task => task.classList.remove("active"));
        newlyCreatedTask.classList.add("active");
    }

    // Re-render todos for the active project (even if no todos exist yet)
    loopDataTodo();
};

document.querySelector(".task-dropdown").addEventListener("click", element => {
    switch (element.target.getAttribute("role")) {
        case "delete": handleDelete();
            break;
        default:
            console.log("Invalid click");
            break;
    }
})


const handleDelete = () => {
    const domAppender = appendInDom();
    const activeTaskName = domAppender.getActiveTask();

    const data = getAllProjects() ?? [];
    // Find the matching project
    const matchedProject = data.find(dataObj => {
        const formattedProjectName = dataObj.projectName.split(" ").join("");  // Format the project name
        console.log(`Checking project: ${formattedProjectName}`);
        return formattedProjectName === activeTaskName.getAttribute("name").replace(/\s+/g, "");
    });
    if (matchedProject) {
        const updatedData = data.filter(obj => obj !== matchedProject);
        setLocalData(updatedData);
        loopData();
        loopDataTodo();
    }
}

document.querySelector("#deleteLocal").addEventListener("click", () => { //delete list from local storage
    localStorage.clear();
    loopData();
    loopDataTodo()
})

document.querySelector("#rename-list").addEventListener("click", () => {
    const domAppender = appendInDom();    // Get the DOM appender instance
    const activeTask = domAppender.getActiveTask();  // Get the active task (project)

    // Get the active task's name before renaming
    const activeTaskName = activeTask.getAttribute("name").replace(/\s+/g, "");
    const newName = document.querySelector(".rename-list-input").value.trim() ?? ""; // Trim the new name input

    const data = getAllProjects() ?? [];

    const matchedProject = data.find(dataObj => {
        const formattedProjectName = dataObj.projectName.split(" ").join("");  // Format the project name
        return formattedProjectName === activeTaskName;
    });

    // Proceed with renaming if we found the project and a new name is provided
    if (matchedProject && newName) {
        matchedProject.projectName = newName; // Update the project name
        setLocalData(data); // Save updated data
    }

    // Re-render the project list but preserve the active project
    loopData(false); // Don't automatically set the first project as active

    // Find the renamed project after re-rendering
    const updatedActiveTask = Array.from(document.querySelectorAll(".task"))
        .find(task => task.getAttribute("name").replace(/\s+/g, "") === newName.split(" ").join(""));

    // Set the renamed project as active
    if (updatedActiveTask) {
        Array.from(document.querySelectorAll(".task")).forEach(task => task.classList.remove("active"));
        updatedActiveTask.classList.add("active");
    }

    // Clear the input field after renaming
    document.querySelector(".rename-list-input").value = "";

    // Re-render todos for the active task
    loopDataTodo();
});


export { setNewProject };
