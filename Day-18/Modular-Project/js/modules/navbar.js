
/**
 * Creates and returns the Navbar UI element.
 * @returns {HTMLElement} The created <nav> element.
 */
export function createNavbar() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <style>
            nav { background-color: #333; padding: 10px 20px; display: flex; justify-content: space-between; }
            nav a { color: white; margin: 0 10px; text-decoration: none; }
            nav a:hover { text-decoration: underline; }
            #logout-btn { background: none; color: white; border: none; cursor: pointer; }
        </style>
        <div>
            <a href="index.html">Home</a>
            <a href="signup.html">Signup</a>
            <a href="login.html">Login</a>
            <a href="todos.html">Todos</a>
        </div>
        <div>
            <button id="logout-btn" style="display:none;">Logout</button>
        </div>
    `;

    const logoutButton = nav.querySelector('#logout-btn');
    
    // Check login state to show/hide logout button
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        logoutButton.style.display = 'inline';
    }

    logoutButton.addEventListener('click', () => {
        sessionStorage.removeItem('isLoggedIn');
        window.location.href = 'login.html'; // Redirect after logout
    });

    return nav;
}