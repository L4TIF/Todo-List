// Import our custom CSS
import '../css/styles.css'

import { createProject } from "./createProject";
import {loopData} from './destructureData';
import { getAllData, setLocalData } from "./LocalStorage";
import { modifyTitle } from "./modifyTodo";





const defaultTask = createProject("My Task");
defaultTask.createTodo("india", "lorem2sdds", new Date(), "High", "none", false);
defaultTask.createTodo("india223", "lorem2", new Date(), "High", "none", false);



modifyTitle(defaultTask.getTodosByIndex(0), "mehico");

setLocalData(defaultTask.getProjectName, defaultTask.getAllTodos());


// console.log(defaultTask.getAllTodos())
// console.log(getAllData()); 



loopData();