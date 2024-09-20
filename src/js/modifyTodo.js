

const modifyTitle = (todoObj, value) => {
    todoObj.title = value;
}
const modifyDesc = (todoObj, value) => {
    todoObj.desc = value;
}
const modifyDueDate = (todoObj, value) => {
    todoObj.dueDate = value;
}
const modifyPriority = (todoObj, value) => {
    todoObj.priority = value;
}
const modifyNotes = (todoObj, value) => {
    todoObj.notes = value;
}
const modifyIsComplete = (todoObj, value) => {
    todoObj.isComplete = value;
}
export {
    modifyTitle,
    modifyDesc,
    modifyDueDate,
    modifyPriority,
    modifyNotes,
    modifyIsComplete
}