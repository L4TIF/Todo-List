// const getAllProjects = () => {
//     let values = [];
//     let keys = Object.keys(localStorage);
//     let i = keys.length;

import { loopData, loopDataTodo } from "./destructureData";

//     while (i--)
//         values.push({
//             data: JSON.parse(localStorage.getItem(keys[i])),
//         })
//     return values[0].data //returns local storage array/object/data(array)
// }
const getAllProjects = () => {
    return JSON.parse(localStorage.getItem('All_Projects'));
}




const setLocalData = (value) => {
    localStorage.setItem('All_Projects', JSON.stringify(value));
}



const updateLocalData = (projectName, todo = []) => {

    const data = getAllProjects() ?? []; //get old data
    data.push({ projectName, todo })  //modify old data
    localStorage.clear();  //clear local
    setLocalData(data)  // add new data
    loopData(); //update dom
    loopDataTodo();
    console.log("local Data updated....succesfully")
}






export { getAllProjects, setLocalData, updateLocalData } 