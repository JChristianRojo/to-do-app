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
