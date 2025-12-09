const firebaseConfig = {
    apiKey: "AIzaSyAymgTZGZq4EpZdn442h27HUJxgCRVddmE",
    authDomain: "book-management-app-5e08c.firebaseapp.com",
    databaseURL: "https://book-management-app-5e08c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "book-management-app-5e08c",
    storageBucket: "book-management-app-5e08c.firebasestorage.app",
    messagingSenderId: "909396332212",
    appId: "1:909396332212:web:e5c6d9431c2c6871ca91e1"
  };

// Import the necessary Firebase functions (Realtime Database v9)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove, update } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// Reference to the 'books' node in the database
const booksRef = ref(database, "books");

// --- DOM Elements ---
const bookForm = document.getElementById('book-form');
const bookListContainer = document.getElementById('book-list');
const modal = document.getElementById("details-modal");
const closeBtn = document.querySelector(".close-btn");
const modalTitle = document.getElementById("modal-title");
const modalDetails = document.getElementById("modal-details");

// --- CRUD Operations ---

/**
 * C - Create: Adds a new book object to the Firebase Realtime Database.
 * @param {object} bookData - The data for the new book.
 */
function addNewBook(bookData) {
    try {
        // push() generates a unique key and adds the data to the booksRef
        push(booksRef, bookData)
            .then(() => {
                alert("Book added successfully!");
                bookForm.reset();
            })
            .catch(error => {
                console.error("Error adding book: ", error);
                alert("Failed to add book.");
            });
    } catch (e) {
        console.error("Error: ", e);
    }
}

/**
 * U - Update: Updates the 'author' field for a specific book.
 * @param {string} bookKey - The unique key (ID) of the book.
 * @param {string} newAuthor - The new author name.
 */
window.updateAuthor = (bookKey) => {
    const newAuthor = prompt("Enter the new author name:");

    if (newAuthor && newAuthor.trim() !== "") {
        const bookNodeRef = ref(database, `books/${bookKey}`);
        
        // update() allows updating specific fields without overwriting the whole object
        update(bookNodeRef, {
            author: newAuthor.trim()
        })
        .then(() => {
            console.log(`Author updated for book ID: ${bookKey}`);
        })
        .catch(error => {
            console.error("Error updating author: ", error);
            alert("Failed to update author.");
        });
    } else if (newAuthor !== null) {
        alert("Author name cannot be empty.");
    }
};

/**
 * D - Delete: Removes a book from the Firebase Realtime Database.
 * @param {string} bookKey - The unique key (ID) of the book to remove.
 */
window.deleteBook = (bookKey) => {
    if (confirm("Are you sure you want to delete this book?")) {
        const bookNodeRef = ref(database, `books/${bookKey}`);
        
        // remove() deletes the node at the specified reference
        remove(bookNodeRef)
        .then(() => {
            console.log(`Book ID ${bookKey} removed successfully.`);
        })
        .catch(error => {
            console.error("Error deleting book: ", error);
            alert("Failed to delete book.");
        });
    }
};

/**
 * View Details: Shows a modal with the complete book information.
 * @param {object} book - The book object containing all details.
 */
window.viewDetails = (book) => {
    modalTitle.textContent = book.title;
    
    // Construct HTML for the details
    modalDetails.innerHTML = `
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Price:</strong> $${parseFloat(book.price).toFixed(2)}</p>
        <p><strong>Image URL:</strong> <a href="${book.coverImageURL}" target="_blank">View Image</a></p>
        <img src="${book.coverImageURL}" alt="Cover" style="max-width: 100%; height: auto; margin-top: 10px;">
    `;
    modal.style.display = "block";
};

// Close modal event listeners
closeBtn.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// --- R - Read (Realtime Sync) ---

/**
 * Dynamically generates the HTML for a single book card.
 * @param {string} key - The unique Firebase key (ID) of the book.
 * @param {object} book - The book data.
 * @returns {string} The HTML string for the book card.
 */
const createBookCard = (key, book) => {
    // Escape single quotes in JSON.stringify to ensure it works correctly in the onclick attribute
    const bookJsonString = JSON.stringify(book).replace(/'/g, "\\'");

    return `
        <div class="book-card">
            <img src="${book.coverImageURL}" alt="${book.title} Cover" class="book-cover">
            <div class="card-body">
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p class="price"><strong>Price:</strong> $${parseFloat(book.price).toFixed(2)}</p>
                <div class="actions">
                    <button class="btn update-btn" onclick="updateAuthor('${key}')">Update Author</button>
                    <button class="btn delete-btn" onclick="deleteBook('${key}')">Delete</button>
                    <button class="btn view-btn" onclick='viewDetails(${bookJsonString})'>View Details</button>
                </div>
            </div>
        </div>
    `;
};

/**
 * Listens for changes and updates the UI automatically (Realtime Sync).
 */
onValue(booksRef, (snapshot) => {
    const booksData = snapshot.val();
    bookListContainer.innerHTML = ''; // Clear existing cards

    if (booksData) {
        // Iterate through the books object (key is the Firebase ID, value is the book data)
        const bookCards = Object.entries(booksData).map(([key, book]) => {
            return createBookCard(key, book);
        }).join('');
        
        bookListContainer.innerHTML = bookCards;
    } else {
        bookListContainer.innerHTML = '<p class="no-books">No books found. Use the form to add one!</p>';
    }
}, {
    // Handle errors during fetch
    onlyOnce: false // Ensures the listener remains active for real-time updates
});


// --- Event Listeners (Form Submission) ---

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const price = document.getElementById('price').value.trim();
    const coverImageURL = document.getElementById('image-url').value.trim();

    if (title && author && price && coverImageURL) {
        const bookData = {
            title,
            author,
            price: parseFloat(price),
            coverImageURL
        };
        addNewBook(bookData);
    } else {
        alert("Please fill in all fields.");
    }
});