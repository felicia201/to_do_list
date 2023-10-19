let titre = document.getElementById("titre")
let description = document.getElementById("description")
let btn = document.getElementById("btn")
let ul = document.getElementById("list")
let tasks = []
let currentFilter = "All"

function Task(titre, description){
    this.id = Date.now();
    this.title = titre;
    this.description = description;
    this.completed = false;
}

function addTask() {
    let tmp = new Task(
        titre.value,
        description.value,
        );
    tasks.push(tmp);
    updateTask(tasks)
}

function updateTask(tab) {
    ul.innerHTML = ""
    let tmp;
    if (currentFilter == "All") {
        tmp = tab             
    }
    if (currentFilter == "Up") {
        tmp = tab.filter((task) => task.completed)
    }
    if (currentFilter == "Down") {
        tmp = tab.filter((task) => !task.completed)
    }
    tmp.forEach(element => {
        if(element.completed){
            ul.innerHTML += `<li><h3>${element.title}</h3><span>${element.description}</span>\n<button onClick="deleteTask(${element.id})">X</button><input type="checkbox" checked onChange="completeTask(${element.id})"></li>`
        }else{
            ul.innerHTML += `<li><h3>${element.title}</h3><span>${element.description}</span>\n<button onClick="deleteTask(${element.id})">X</button><input type="checkbox"  onChange="completeTask(${element.id})"></li>`
        }
    });
    console.log(tasks)
}

function changeFilter(newFilter) {
    currentFilter = newFilter
    updateTask(tasks)
}

function deleteTask(id) {
    let tmp = tasks.filter((task) => task.id != id)
    tasks = tmp;
    updateTask(tasks);
}

function completeTask(id) {
    let tmp = tasks.map((task) => task.id == id ? {...task, completed:!task.completed} : task)
    tasks = tmp;
    updateTask(tasks)
}

btn.addEventListener('click', addTask)