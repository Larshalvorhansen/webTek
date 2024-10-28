// Task 2.1 - Set up initial focus on load
document.getElementById('task-input').focus();

// Task 2.2 - Add event listener for form submission
document.getElementById('task-form').addEventListener('submit', addTask);

// Task storage
let tasks = []; // Task 2.3

// Task 2.2 - Function to add tasks
function addTask(event) {
    event.preventDefault();


    const taskText = document.getElementById('task-input').value;
    if (taskText === '') return;

    const task = {
        text: taskText,
        completed: false
    };
    tasks.unshift(task); 

    document.getElementById('task-input').value = '';
    document.getElementById('task-input').focus();

    renderTasks();
    updateTaskCounter();
}

// Task 2.4 
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTaskCompletion(index));

        listItem.textContent = task.text;
        listItem.prepend(checkbox);
        if (task.completed) listItem.classList.add('completed');

        taskList.appendChild(listItem);
    });
}

// Task 2.4 
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
    updateTaskCounter();
}

// Task 2.5 
function updateTaskCounter() {
    const X_completedTasks = tasks.filter(task => task.completed).length;
    const Y_totalTasks = tasks.length;
    document.getElementById('task-counter').innerText = `${X_completedTasks}/${Y_totalTasks} completed`;
}
