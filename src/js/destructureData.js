import { getAllProjects } from "./LocalStorage";
import { appendInDom } from "./renderData";


const loopData = (setFirstActive = true, activeTaskName = null) => {
    const data = getAllProjects() ?? [];
    const domAppender = appendInDom();
    domAppender.clearHTMLContainers();

    if (data.length > 0) {
        // Track if we found the active task
        let foundActiveTask = false;

        data.forEach((dataObj, index) => {
            const isActive = setFirstActive && index === 0; // Activate the first project if applicable
            domAppender.renderProjectName(dataObj.projectName, isActive);

            // Check if this project matches the active task
            if (!foundActiveTask && activeTaskName) {
                const formattedProjectName = dataObj.projectName.split(" ").join("");
                if (formattedProjectName === activeTaskName) {
                    foundActiveTask = true; // Mark that we found the active task
                }
            }
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
                // Render todos for the active project
                domAppender.setTaskListName(matchedProject.projectName);
                if (matchedProject.todos) {
                    matchedProject.todos.forEach(todo => {
                        domAppender.renderTodo(
                            matchedProject.projectName, 
                            todo.title, 
                            todo.desc, 
                            todo.timeLeft, 
                            todo.priority, 
                            todo.notes, 
                            todo.isComplete
                        );
                    });
                } else {
                    console.log("No todos found for the matched project.");
                }
            }
        }
    } else {
        console.warn("No projects found.");
    }
};


// const loopDataTodo = () => {
//     const data = getAllProjects() ?? [];
//     const domAppender = appendInDom();
//     const activeTask = domAppender.getActiveTask(); // Get the active project
//     console.log("data while looping todo", data)
//     domAppender.clearTodoContainer();

//     if (!activeTask) {
//         console.log("No active task found.");
//         domAppender.setTaskListName();
//         return; // Exit if no active project
//     }

//     const activeTaskName = activeTask.getAttribute("name").replace(/\s+/g, ""); // Get the active task's name

//     const matchedProject = data.find(dataObj => {
//         const formattedProjectName = dataObj.projectName.split(" ").join(""); // Format the project name
//         return formattedProjectName === activeTaskName;
//     });

//     if (matchedProject) {
//         domAppender.setTaskListName(matchedProject.projectName);
//         console.log("Matched project:", matchedProject);

//         if (matchedProject.todos) {
//             matchedProject.todos.forEach(todo => {

//                 domAppender.renderTodo(matchedProject.projectName, todo.title, todo.desc, todo.timeLeft, todo.priority, todo.notes, todo.isComplete);
//             });
//         } else {
//             console.log("No todos found for the matched project.");
//         }
//     } else {
//         console.log("No matching project for the active task.");
//     }
// };



export { loopData, loopDataTodo };
