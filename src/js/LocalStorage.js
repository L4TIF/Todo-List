const getAllProjects = () => {
    let values = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--)
        values.push({
            data: JSON.parse(localStorage.getItem(keys[i])),
        })
    return values[0].data //returns local storage array/object/data(array)
}

const setLocalData = (value) => {
    localStorage.setItem('All_projects', JSON.stringify(value));
}



export { getAllProjects, setLocalData } 