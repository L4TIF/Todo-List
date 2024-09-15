const getAllData = () => {
    let values = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--)
        values.push({
            projectName: keys[i],
            todos: JSON.parse(localStorage.getItem(keys[i])),
        })
    return values
}

const setLocalData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value)); 
}



export { getAllData, setLocalData } 