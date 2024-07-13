const label = document.querySelector("#titleLabel");
const container = document.querySelector(".container");
const addBtn = document.querySelector("#add");
const clearBtn = document.querySelector("#clear");
const input = document.querySelector("#input");
const list = document.querySelector("#list");


let tasks = [];
let id = 0;

function addTask() {
    const task = input.value;

    if (task) {
        const taskObj = {
            id: id,
            task: task
        };
        tasks.push(taskObj);
        id++;
        input.value = "";
        renderTasks();
        return task;
    }
}

function clearList() {
    tasks = [];
    renderTasks();
}

function renderTasks() {
    list.innerHTML = ""; // Clear the existing tasks

    tasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.textContent = task.task;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            deleteTask(task.id);
        });

        taskElement.appendChild(deleteButton);
        list.appendChild(taskElement);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearList);