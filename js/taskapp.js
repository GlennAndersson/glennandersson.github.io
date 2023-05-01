(function(app) {
    "use strict";
    const pageItems = {};

    app.todoStartup = function() {
        const frm = document.getElementById("taskForm");
        pageItems.taskList = document.getElementById("taskList");
        pageItems.completedTaskList = document.getElementById("completedTaskList");
        pageItems.taskInput = frm.querySelector("#taskInput");
        pageItems.submit = frm.querySelector("#submit");
        pageItems.removeButton = frm.querySelector("#remove");
        pageItems.clearButton = frm.querySelector("#clearForm");

        pageItems.submit.addEventListener("click", addTask);
        pageItems.taskList.addEventListener("click", completeTask);
        pageItems.removeButton.addEventListener("click", removeTasks);
        pageItems.clearButton.addEventListener("click", clearTasks);

        loadFromStorage();
        clearOldStorage();
        console.log(localStorage.taskList);
        console.log(localStorage.completedTaskList);

    };


    function clearOldStorage() {
        let value = JSON.parse(localStorage.getItem("taskList"));
        if (Array.isArray(value) && value.length === 0) {
        localStorage.removeItem("taskList");
        }
        let secondValue = JSON.parse(localStorage.getItem("completedTaskList"));
        if (Array.isArray(secondValue) && secondValue.length === 0) {
        localStorage.removeItem("completedTaskList");
        }
    }
    function loadFromStorage() {
        const itemsString = localStorage.getItem("taskList");
        const completedItemsString = localStorage.getItem("completedTaskList");

        if (itemsString !== null) {
            const items = JSON.parse(itemsString);
            items.forEach(item => {
                const li = document.createElement("li");
                li.innerText = item.task;
                if (item.isComplete) {
                    li.classList.add("completedTask");
                }
                pageItems.taskList.appendChild(li);
            });
        }
        if (completedItemsString !== null) {
            const items = JSON.parse(completedItemsString);
            items.forEach(item => {
                const li = document.createElement("li");
                li.innerText = item.task;
                if (item.isComplete) {
                    li.classList.add("completedTask");
                }
                pageItems.completedTaskList.appendChild(li);
            });
        }
    }

    function saveToStorage() {
        const items = Array.from(pageItems.taskList.children);
        const itemsToSave = items.map(item => {
            return {
                    task: item.innerText,
                    isComplete: item.classList.contains("completedTask")
                };
        

        });

        localStorage.setItem("taskList", JSON.stringify(itemsToSave));
    }

    function saveCompletedToStorage() {
        const items = Array.from(pageItems.completedTaskList.children);
        const completedItemsToSave = items.map(item => {
            return {
                    task: item.innerText,
                    isComplete: item.classList.contains("completedTask")
                };
        

        });

        localStorage.setItem("completedTaskList", JSON.stringify(completedItemsToSave));
    }

    function clearTasks(e) {
        e.preventDefault();

        const items = Array.from(pageItems.taskList.children);
        const completedItems = Array.from(pageItems.completedTaskList.children);
        items.forEach(el => {
            pageItems.taskList.removeChild(el);
        });
        completedItems.forEach(el => {
            pageItems.completedTaskList.removeChild(el);
        });
        saveToStorage();
        saveCompletedToStorage();
        clearOldStorage();
    }

    function removeTasks(e) {
        e.preventDefault();

        const items = Array.from(pageItems.completedTaskList.children);

        items.forEach(el => {
            if(el.classList.contains("completedTask")) {
                pageItems.completedTaskList.removeChild(el);
            }
        });
        saveToStorage();
        saveCompletedToStorage();
        clearOldStorage();
    }

    function completeTask(e) {
        if (e.target.classList.contains("completedTask")){
            e.target.classList.remove("completedTask");
        } else {

            e.target.classList.add("completedTask");
            
            const items = Array.from(pageItems.taskList.children);

            items.forEach(el => {
                if(el.classList.contains("completedTask")) {
                    pageItems.completedTaskList.appendChild(el);
                }
            });
        }
        saveToStorage();
        saveCompletedToStorage();
        clearOldStorage();
    }

    function addTask(e) {
        e.preventDefault();
        {
            if (pageItems.taskInput.value === "") {
                alert("Input field cannot be empty!");
            } else {
                const li = document.createElement("li");
                li.innerText = pageItems.taskInput.value;
                pageItems.taskList.appendChild(li);
                pageItems.taskInput.value = "";
                saveToStorage();
                saveCompletedToStorage();
                clearOldStorage();
            }
        }
    }
})(window.app = window.app || {});