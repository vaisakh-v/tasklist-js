const fontRemoveClasses = "fas fa-minus-square text-danger close-button";

function addListeners() {
    console.log("Adding event listeners");
    document.getElementById('btnAdd').addEventListener('click', function () {
        let task = document.getElementById('taskTxt').value;
        addTask(task);
    });
    document.getElementById('btnClearAll').addEventListener('click', clearTasks);
    
    //Add li listeners
    let childList = document.querySelectorAll('ul#taskListId li');
    childList.forEach(function(item, index, arr){
        item.addEventListener('click', clearTask);
    });
}

function addTask(task) {
    if (task.length >= 1) {
        console.log("Adding task", task);
        let taskItem = document.createElement('li');
        taskItem.className = "form-control";
        taskItem.innerHTML = task;
        let fontRemove = document.createElement('i');
        fontRemove.className = fontRemoveClasses;
        fontRemove.addEventListener('click', clearTask);
        taskItem.appendChild(fontRemove);
        let parentList = document.querySelector('ul#taskListId');
        parentList.appendChild(taskItem);
    } else {
        alert("Please enter a task description");
    }
}

function clearTask(evt){
    let parentList = document.querySelector('ul#taskListId');
    let taskItem = evt.target.parentNode;
    parentList.removeChild(taskItem);
}

function clearTasks() {
    console.warn("Clearing all tasks");
    let parentList = document.querySelector('ul#taskListId');
    let childList = document.querySelectorAll('ul#taskListId li');
    childList.forEach(function(item, index, arr){
        parentList.removeChild(item);
    });
}