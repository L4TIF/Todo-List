import { getAllProjects } from "./LocalStorage";
import {  renderData } from "./renderData";


const listData = (objOfData) => {

    const { projectName, ...todosList } = objOfData;
    

    renderData(projectName, todosList.todos)

}

const loopData = () => {

    // get local data if any 
    const data = getAllProjects() ?? "";
    if (data) {
        data.forEach(dataObj => listData(dataObj))
    }
}

export { loopData };