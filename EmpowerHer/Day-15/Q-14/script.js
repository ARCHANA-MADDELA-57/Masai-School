// Key for localStorage
const STORAGE_KEY = 'enhancedTodoList';

// Get references to the DOM elements
const taskInput = document.getElementById('new-task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const todoListContainer = document.getElementById('todo-list-container');
const searchBar = document.getElementById('search-bar');

// Initialize tasks array from localStorage or an empty array
let tasks = loadTasks();

/**
 * 5. Store tasks as a JSON array in localStorage.
 * Loads tasks from localStorage and parses the JSON string into an array.
 * @returns {Array} The list of tasks.
 */
function loadTasks() {
    const tasksJSON = localStorage.getItem(STORAGE_KEY);
    return tasksJSON ? JSON.parse(tasksJSON) : [];
}

/**
 * Saves the current tasks array back to localStorage after converting to a JSON string.
 */
function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

/**
 * Renders the tasks to the DOM, optionally filtering them based on a search term.
 * @param {string} searchTerm - Optional term to filter tasks.
 */
function renderTasks(searchTerm = '') {
    todoListContainer.innerHTML = ''; // Clear existing list

    const filteredTasks = tasks.filter(task => 
        // Filter tasks whose text includes the search term (case-insensitive)
        task.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filteredTasks.forEach(task => {
        // Create the <li> element for the task
        const listItem = document.createElement('li');
        listItem.id = `task-${task.id}`;

        // Create the span for the task text
        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = task.text;
        
        // Apply completion status class (Key Feature 2)
        if (task.completed) {
            taskTextSpan.classList.add('completed');
        }

        // Action buttons container
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('task-actions');

        // Toggle button (Key Feature 2: Mark tasks as completed)
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = task.completed ? 'Undo' : 'Complete';
        toggleBtn.onclick = () => toggleCompletion(task.id);

        // Remove button (Key Feature 3: Remove tasks)
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeTask(task.id);

        // Assemble the list item
        listItem.appendChild(taskTextSpan);
        actionsDiv.appendChild(toggleBtn);
        actionsDiv.appendChild(removeBtn);
        listItem.appendChild(actionsDiv);
        
        // Append to the list container
        todoListContainer.appendChild(listItem);
    });
}

/**
 * 1. Adds a new task to the array and re-renders.
 */
addTaskBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text === '') return; // Simple validation

    const newTask = {
        // Generate a unique ID (using Date.now() for simplicity)
        id: Date.now(), 
        text: text,
        completed: false // Default completion status
    };

    tasks.push(newTask);
    saveTasks(); // Save to localStorage
    renderTasks(); // Re-render the list
    taskInput.value = ''; // Clear input
});

/**
 * Toggles the completion status of a task.
 * @param {number} id - The unique ID of the task.
 */
function toggleCompletion(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        saveTasks();
        renderTasks(searchBar.value); // Re-render, keeping the search filter
    }
}

/**
 * 3. Removes a task from the array.
 * @param {number} id - The unique ID of the task.
 */
function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks(searchBar.value); // Re-render, keeping the search filter
}

/**
 * 4. Search for tasks in real time.
 * Key Requirement: Allow users to search by typing.
 */
searchBar.addEventListener('input', (event) => {
    renderTasks(event.target.value);
});

// Initial render when the page loads
renderTasks();