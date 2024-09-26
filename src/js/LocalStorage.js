
import { loopData, loopDataTodo } from "./destructureData";

const getAllProjects = () => {
    return JSON.parse(localStorage.getItem('All_Projects'));
}




const setLocalData = (value) => {
    localStorage.setItem('All_Projects', JSON.stringify(value));
}



const updateLocalData = (projectName, todos = []) => {

    const data = getAllProjects() ?? []; //get old data
    data.push({ projectName, todos })  //modify old data
    localStorage.clear();  //clear local
    setLocalData(data)  // add new data
    loopData(); //update dom
    loopDataTodo();
    console.log("local Data updated....succesfully")
}






export { getAllProjects, setLocalData, updateLocalData } 