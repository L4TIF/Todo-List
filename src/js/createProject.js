import { formatDistanceToNow } from "date-fns";

// create project
const createProject = (name) => {
    let todos = [];
    let projectName = name;
    const getProjectName = () => projectName; //get name
    const setProjectName = (newName) => projectName = newName; //set name
    // create todo
    const createTodo = (title, desc, timeLeft, priority, notes, isComplete = false) => {
        todos.push({ title, desc, timeLeft, priority, notes, isComplete });
    }
    // get all todos
    const getAllTodos = () => { return { projectName, todos } };

    const getTodosByIndex = (index) => {
        if (index >= 0 && index < todos.length)
            return todos[index]
        else
            return new Error('todo doesnt exist');
    }
    return { getProjectName, setProjectName, createTodo, getAllTodos, getTodosByIndex }
}

const calcDate = (dueDate, dueTime) => {
    if (!(dueDate && dueTime)) return "";
    const [year, month, date] = dueDate.map(Number);
    const [hour, minutes] = dueTime.map(Number);

    console.log(dueDate, year, month, date)
    return formatDistanceToNow(
        new Date(year, month - 1, date, hour, minutes),
        { addSuffix: true }
    )
}











export { createProject, calcDate } 