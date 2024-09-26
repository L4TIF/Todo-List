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
defaultTask.createTodo("Create the Ultimate Hello World App", "This isnt just any Hello World—this will be the Mona Lisa of introductory applications. Watch out, world!","Until the end of time", "High", "none", true);





// appending all projects
projectsArray.push(defaultTask.getAllTodos());


if (localStorage.length < 1) {
    setLocalData(projectsArray);
}


loopData();
loopDataTodo()





