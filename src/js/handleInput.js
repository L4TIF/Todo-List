import { createProject } from "./createProject";
import { loopData, loopDataTodo } from "./destructureData";
import { updateLocalData } from "./LocalStorage";



let addProjectContainer;
window.innerWidth < 960 ? addProjectContainer = document.querySelector(".project-container-sm") : addProjectContainer = document.querySelector(".project-container-lg");

const addTodoContainer = document.querySelector(".todo-container");

let project; //new project object

addProjectContainer.addEventListener("click", (element) => {
    let identifier = element.target.className;


    switch (true) {
        case identifier.includes("create-new-project"):
            setNewProject();
            addProjectContainer.querySelector(".project").value = "";
            break;

        case identifier.includes("task"):
            let allTasks = element.target.parentNode.childNodes;
            allTasks.forEach(child => {
                child.classList.remove("active")
            });
            element.target.classList.add("active");
            loopDataTodo()
            break;

        default: console.log("invalid click")
            break;
    }

})



const setNewProject = () => {
    let projectName = addProjectContainer.querySelector(".project").value;
    if (!(projectName === "")) {
        project = createProject(projectName);
        updateLocalData(project.getProjectName());
    }

};





const listenTodoContainer = () => {
    addTodoContainer.addEventListener("click", (element) => {
        let identifier = element.target.className;
        switch (true) {
            case identifier.includes("edit"): console.log("edit")// i'll comeback later to you ;(
                break;

            default: console.log("invalid click")
                break;
        }
    })
}





export { setNewProject }