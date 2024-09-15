

const modifyTitle = (todo, value) => {
    todo.title = value;
}
const modifyDesc = (todo, value) => {
    todo.desc = value;
}
const modifyDueDate = (todo, value) => {
    todo.dueDate = value;
}
const modifyPriority = (todo, value) => {
    todo.priority = value;
}
const modifyNotes = (todo, value) => {
    todo.notes = value;
}
const modifyIsComplete = (todo, value) => {
    todo.isComplete = value;
}
export {
    modifyTitle,
    modifyDesc,
    modifyDueDate,
    modifyPriority,
    modifyNotes,
    modifyIsComplete
}