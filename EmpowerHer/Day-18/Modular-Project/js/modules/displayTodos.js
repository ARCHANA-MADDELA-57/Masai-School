
/**
 * Dynamically displays todos on the page.
 * @param {Array<Object>} data - The array of todo objects.
 */
export function displayTodos(data) {
    const todoListContainer = document.getElementById('todo-list');
    if (!todoListContainer) return;

    // Create a list structure
    const ul = document.createElement('ul');

    data.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = `${todo.id}. ${todo.title}`;
        
        // Add a class based on completion status
        li.style.textDecoration = todo.completed ? 'line-through' : 'none';
        li.style.color = todo.completed ? 'green' : 'black';
        
        ul.appendChild(li);
    });

    todoListContainer.innerHTML = ''; // Clear previous content
    todoListContainer.appendChild(ul);
}