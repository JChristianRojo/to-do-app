function clearInputField() {
    document.getElementById("to-do-input").value = "";
}

function addToDo() {
    const toDoName = document.getElementById("to-do-input").value;
    const li = document.createElement("li");
    const liText = document.createTextNode(toDoName);
    
    li.appendChild(liText);
    document.getElementById("to-do-list").appendChild(li);

    setTimeout(clearInputField, 500);
}


// function clearInputField() {
//     document.getElementById("to-do-input").value = "";
// }

// const addToDoPromise = new Promise((resolve, reject) => {
//     const li = document.createElement("li");
//     const toDoName = document.getElementById("to-do-input").value;
//     const liText = document.createTextNode(toDoName);

//     li.appendChild(liText);

//     if (toDoName === "") {
//         reject("This cannot be empty");
//     } else {
//         document.getElementById("to-do-list").appendChild(li);
//         resolve(toDoName);
//     }
// });

// addToDoPromise.then((toDoName) => {
//     console.log("Added ToDo: " + toDoName);
//     clearInputField();
// }).catch((error) => {
//     console.log(error);
// });
