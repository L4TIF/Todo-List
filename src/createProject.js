// create project
const createProject = (name) => {
    let todos = [];
    // create todo
    const createTodo = (title, desc, dueDate, priority, notes, isComplete = false) => {
        todos.push({ title, desc, dueDate, priority, notes, isComplete });
    }

    const getAllTodos = () => todos;
    const getProjectName = () => name;

    const getTodosByIndex = (index) => {
        if (index >= 0 && index < todos.length)
            return todos[index];
        else
            return new Error('todo doesnt exist');
    }
    return { getProjectName, createTodo, getAllTodos, getTodosByIndex }
}

export { createProject }