
import { displayTodos } from './modules/displayTodos.js';
import { createNavbar } from './modules/navbar.js';
import { createFooter } from './modules/footer.js';

// Guard: Check if the user is logged in
function checkAuth() {
    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
        alert('You must be logged in to view the Todos page.');
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Fetch todos from the specified API
const TODO_URL = 'https://jsonplaceholder.typicode.com/todos';

async function fetchAndDisplayTodos() {
    if (!checkAuth()) return; // Stop if not authenticated

    try {
        const response = await fetch(TODO_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // Requirement: Use the imported module to render the data
        displayTodos(data.slice(0, 20)); // Only show first 20 for brevity
        
    } catch (error) {
        const todoListContainer = document.getElementById('todo-list');
        todoListContainer.textContent = `Error loading todos: ${error.message}`;
        console.error('Error fetching todos:', error);
    }
}

// Setup common UI components
document.addEventListener('DOMContentLoaded', () => {
    // Inject Navbar
    document.body.prepend(createNavbar());
    
    // Inject Footer
    document.body.appendChild(createFooter());

    fetchAndDisplayTodos();
});