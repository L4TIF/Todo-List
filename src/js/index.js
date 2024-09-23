// Import our custom CSS
import '../css/styles.css'

import { calcDate, createProject } from "./createProject";
import { loopData, loopDataTodo } from './destructureData';
import { getAllProjects, setLocalData, updateLocalData } from "./LocalStorage";
import { modifyTitle } from "./modifyTodo";
import { appendInDom, projectNameContainer } from './renderData';
import { getProjectName, setNewProject } from './handleInput';



// array of projects
const projectsArray = [];

// some projects
const defaultTask = createProject("My Task");
defaultTask.createTodo("india", "lorem2sdds", calcDate([2024, 9, 26], [23, 2]), "High", "none", false);
defaultTask.createTodo("india223", "lorem2", calcDate([2024, 9, 26], [23, 2]), "High", "none", false);

const NewTask = createProject("My Task2");
NewTask.createTodo("Australia", "lorem2sdds", calcDate([2024, 9, 26], [23, 2]), "High", "none", false);
NewTask.createTodo("Australia", "lorem2", calcDate([2024, 9, 26], [23, 2]), "High", "none", false);



// appending all projects
projectsArray.push(defaultTask.getAllTodos(), NewTask.getAllTodos());


if (localStorage.length < 1) {
    setLocalData(projectsArray);
}


loopData();
loopDataTodo()





