class TodoItem {
    constructor(text) {
        this.text = text;
        this.completed = false;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }

    render() {
        const item = document.createElement('div');
        item.className = 'todo-item';
        item.textContent = this.text;
        if (this.completed) {
            item.classList.add('completed');
        }
        return item;
    }
}

export default TodoItem;