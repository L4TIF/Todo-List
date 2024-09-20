// Import our custom CSS
import '../css/styles.css'

import { createProject } from "./createProject";
import { loopData } from './destructureData';
import { getAllProjects, setLocalData } from "./LocalStorage";
import { modifyTitle } from "./modifyTodo";


// array of projects
const projectsArray = [];

// some projects
const defaultTask = createProject("My Task");
defaultTask.createTodo("india", "lorem2sdds", new Date(), "High", "none", false);
defaultTask.createTodo("india223", "lorem2", new Date(), "High", "none", false);

const NewTask = createProject("My Task2");
NewTask.createTodo("india", "lorem2sdds", new Date(), "High", "none", false);
NewTask.createTodo("india223", "lorem2", new Date(), "High", "none", false);



// appending all projects
projectsArray.push(defaultTask.getAllTodos(), NewTask.getAllTodos());

setLocalData(projectsArray); 

console.log(getAllProjects())
setLocalData(getAllProjects())


loopData();