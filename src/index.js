
import { createProject } from "./createProject";
import { getAllData, setLocalData } from "./LocalStorage";
import { modifyTitle } from "./modifyTodo";
import "./styles.css";

const defaultTask = createProject("My Task");
defaultTask.createTodo("india", "lorem2", new Date(), "High", "none", false);
defaultTask.createTodo("india223", "lorem2", new Date(), "High", "none", false);



modifyTitle(defaultTask.getTodosByIndex(0), "mehico");

setLocalData(defaultTask.getProjectName, defaultTask.getAllTodos());


console.log(defaultTask.getAllTodos())
console.log(getAllData()); 