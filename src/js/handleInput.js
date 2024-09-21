import { createProject } from "./createProject";
import { loopData, loopDataTodo } from "./destructureData";
import { updateLocalData, getAllProjects } from "./LocalStorage";

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

    project = createProject(projectName);
    updateLocalData(project.getProjectName());
    
    // Re-render the project list
    loopData(); // Refresh the project list to include the new project
};

export { setNewProject };
