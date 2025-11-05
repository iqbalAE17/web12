// This file contains the main JavaScript logic for the To-Do List application.
// It initializes the application, handles the creation, deletion, and rendering of to-do items.

import { TodoItem } from '../components/todoItem.js';

const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');

let todos = [];

// Function to render the to-do list
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = new TodoItem(todo, index);
        todoList.appendChild(todoItem.render());
    });
}

// Function to add a new to-do item
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        todos.push(todoText);
        todoInput.value = '';
        renderTodos();
    }
}

// Function to delete a to-do item
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

// Event listeners
addButton.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Initial render
renderTodos();