// This file contains the logic for the drag-and-drop functionality for the To-Do List application.

const draggableItems = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.drop-zone');

draggableItems.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

function dragEnd(e) {
    e.target.classList.remove('hide');
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(id);
    const dropzone = e.target;

    dropzone.appendChild(draggableElement);
}