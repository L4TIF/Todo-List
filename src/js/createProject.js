// create project
const createProject = (name) => {
    let todos = [];
    let projectName = name;
    const getProjectName = projectName; //get name
    const setProjectName = (newName) => projectName = newName; //set name
    // create todo
    const createTodo = (title, desc, dueDate, priority, notes, isComplete = false) => {
        todos.push({ title, desc, dueDate, priority, notes, isComplete });
    }

    const getAllTodos = () => todos;
    const getTodosByIndex = (index) => {
        if (index >= 0 && index < todos.length)
            return todos[index];
        else
            return new Error('todo doesnt exist');
    }
    return { getProjectName, setProjectName, createTodo, getAllTodos, getTodosByIndex }
}

export { createProject } 