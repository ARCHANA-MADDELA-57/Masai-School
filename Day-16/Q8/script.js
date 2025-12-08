const API_URL = 'https://jsonplaceholder.typicode.com/todos';
const LOCAL_STORAGE_KEY = 'myTodos';
const todoListEl = document.getElementById('todo-list');
const emptyMessageEl = document.getElementById('empty-message');

/**
 * 1. Makes a GET request to the API, 
 * 2. Fetches all todos, but only stores the first 20 in Local Storage.
 * @returns {Promise<void>}
 */
async function fetchAndStoreTodos() {
    try {
        // Check if todos are already in Local Storage
        if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
            console.log('Todos already exist in Local Storage. Skipping API fetch.');
            return;
        }

        console.log('Fetching todos from API...');
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const todos = await response.json();
        
        // Store only the first 20 todos
        const initialTodos = todos.slice(0, 20);
        
        // Add a unique ID property to each todo since the API IDs are 1-based and we need to ensure local uniqueness
        // and add a local 'completed' status to match our toggle functionality
        const todosToStore = initialTodos.map((todo, index) => ({
            id: todo.id,
            title: todo.title,
            completed: todo.completed 
        }));

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todosToStore));
        console.log('First 20 todos stored successfully in Local Storage.');
    } catch (error) {
        console.error('Failed to fetch or store todos:', error);
    }
}

/**
 * Retrieves the stored todos from Local Storage.
 * @returns {Array<Object>} The array of todo objects, or an empty array if none found.
 */
function getStoredTodos() {
    const todosJson = localStorage.getItem(LOCAL_STORAGE_KEY);
    return todosJson ? JSON.parse(todosJson) : [];
}

/**
 * Renders the list of todos to the UI and updates the empty message.
 * @param {Array<Object>} todos - The array of todo objects to render.
 */
function renderTodos(todos) {
    // Clear the current list
    todoListEl.innerHTML = ''; 

    // Bonus: Show "No Todos Available" message when list is empty
    if (todos.length === 0) {
        emptyMessageEl.style.display = 'block';
        return;
    }

    emptyMessageEl.style.display = 'none';

    todos.forEach(todo => {
        // Create the list item element
        const listItem = document.createElement('li');
        // Add class and completed status class
        listItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        
        // Set the content including title, completed status, delete button, and toggle button
        listItem.innerHTML = `
            <span class="todo-title">${todo.title}</span>
            <div class="actions">
                <button class="toggle-btn" data-id="${todo.id}">
                    ${todo.completed ? 'Uncomplete' : 'Complete'}
                </button>
                <button class="delete-btn" data-id="${todo.id}">
                    Delete
                </button>
            </div>
        `;

        // Append the new item to the list
        todoListEl.appendChild(listItem);
    });
}

/**
 * Removes a specific todo from Local Storage by its ID and re-renders the list.
 * @param {number} todoId - The ID of the todo to delete.
 */
function deleteTodo(todoId) {
    let todos = getStoredTodos();
    
    // Filter out the todo with the matching ID
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    
    // Store the updated list back to Local Storage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    
    // Re-render the list without page refresh (Requirement 5)
    renderTodos(updatedTodos);
    console.log(`Todo with ID ${todoId} deleted and list re-rendered.`);
}

/**
 * Toggles the 'completed' status of a specific todo in Local Storage and re-renders the list.
 * @param {number} todoId - The ID of the todo to toggle.
 */
function toggleTodoStatus(todoId) {
    let todos = getStoredTodos();
    
    // Find the todo and update its completed status
    const updatedTodos = todos.map(todo => {
        if (todo.id === todoId) {
            // Toggle the status
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });

    // Store the updated list back to Local Storage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));

    // Re-render the list without page refresh
    renderTodos(updatedTodos);
    console.log(`Todo with ID ${todoId} status toggled and list re-rendered.`);
}

/**
 * Initializes the application: fetches/stores todos and sets up event listeners.
 */
async function initApp() {
    // 1 & 2. Fetch and store todos (only runs if Local Storage is empty)
    await fetchAndStoreTodos(); 
    
    // 3. Retrieve and display the stored todos on the UI
    const initialTodos = getStoredTodos();
    renderTodos(initialTodos);

    // Add a single event listener to the list container (Event Delegation)
    todoListEl.addEventListener('click', (event) => {
        const target = event.target;
        
        // Check if the clicked element is a delete button
        if (target.classList.contains('delete-btn')) {
            // Get the todo ID from the data-id attribute (it's a string, so convert to number)
            const todoId = parseInt(target.getAttribute('data-id'));
            deleteTodo(todoId);
        } 
        // Check if the clicked element is a toggle button
        else if (target.classList.contains('toggle-btn')) {
             const todoId = parseInt(target.getAttribute('data-id'));
             toggleTodoStatus(todoId);
        }
    });
}

// Start the application
initApp();