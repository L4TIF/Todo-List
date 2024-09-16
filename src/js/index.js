// Import our custom CSS
import '../css/styles.css'

import { createProject } from "./createProject";
import { getAllProjects, setLocalData } from "./LocalStorage";
import { modifyTitle } from "./modifyTodo";


// array of projects
const projectsArray = [];

// some projects
const defaultTask = createProject("My Task");
defaultTask.createTodo("india", "lorem2", new Date(), "High", "none", false);
defaultTask.createTodo("india223", "lorem2", new Date(), "High", "none", false);

const newTask = createProject("newTask");
newTask.createTodo("go college", "", new Date(), "low", "", false);


// appending all projects
projectsArray.push(defaultTask.getAllTodos(), newTask.getAllTodos());



modifyTitle(defaultTask.getTodosByIndex(0),"Australia");


setLocalData(projectsArray);

const allProjects = getAllProjects();
allProjects.forEach(element => {
    console.log(element)
});

console.log(getAllProjects());



