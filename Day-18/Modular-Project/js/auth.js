

// Function to get users from localStorage or initialize an empty array
function getUsers() {
    const usersJson = localStorage.getItem('users');
    return usersJson ? JSON.parse(usersJson) : [];
}

// --- Signup Logic ---
export function handleSignup(event) {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const message = document.getElementById('signup-message');

    let users = getUsers();

    // Check if user already exists
    if (users.find(u => u.email === email)) {
        message.textContent = 'User already exists. Please login.';
        message.style.color = 'red';
        return;
    }

    // Add new user
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));

    message.textContent = 'Signup successful! Redirecting to login...';
    message.style.color = 'green';

    // Redirect after a short delay
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
}

// --- Login Logic ---
export function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const message = document.getElementById('login-message');

    const users = getUsers();
    
    // Find matching user
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Successful login
        sessionStorage.setItem('isLoggedIn', 'true');
        message.textContent = 'Login successful! Redirecting to Todos...';
        message.style.color = 'green';
        
        // Requirement: On successful login, redirect to todos.html
        setTimeout(() => {
            window.location.href = 'todos.html';
        }, 1000);
        
    } else {
        message.textContent = 'Invalid email or password.';
        message.style.color = 'red';
        sessionStorage.removeItem('isLoggedIn');
    }
}