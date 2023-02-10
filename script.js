/*

 * Title: To Do List vanilla JS DOM file
 * Description: This file has all the DOM js function associated with the To Do App project
 * Author: Shamiul learning with Sumit
 * Date: 02/08/2023
 *

*/

// select elements and assign them to variables
let newTask = document.querySelector('#new-task');// new-task selectin input id
let form = document.querySelector('form');
let incompleteUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');//selecting like css

// functions
// creating tank
let createTask = function (task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;//newly created task item
    checkBox.type = 'checkbox'; //like setting css attribute property

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

// add task event
let addTask = function (event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    incompleteUl.appendChild(listItem);
    newTask.value = '';
    // bind the newlist item to incomplete list
    bindInCompleteItems(listItem, completeTask);
}

// completeTask
let completeTask = function () {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

// binding task 
let bindInCompleteItems = function (taskItem, checkBoxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkBoxClick;
}

let bindCompleteItems = function (taskItem, deleteBtnClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteBtnClick;
}


for (let i = 0; i < incompleteUl.children.length; i++) {
    bindInCompleteItems(incompleteUl.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);