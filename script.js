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
let createTask = function (task) {
    let listItem = document.createElement('li');
    let listCheckBox = document.createElement('input');
    let listLabel = document.createElement('label');

    listLabel.innerText = task;//newly created task item
    listCheckBox.type = 'checkbox'; //like setting css attribute property

    listItem.appendChild(listCheckBox);
    listItem.appendChild(listLabel);

    return listItem;
}

// add task event
let addTask = function (event) {
    event.preventDefault();
    let newListItem = createTask(newTask.value);
    incompleteUl.appendChild(newListItem);
    // bind the newlist item to incomplete list
    bindInCompleteItems(newListItem, completeTask);
}

let completeTask = function () {
}

let bindInCompleteItems = function (taskItem, checkboxClick) {
    let checkbox = taskItem.querySelector('input[type="checbox"]');
    checkbox.onchange = checkboxClick
}