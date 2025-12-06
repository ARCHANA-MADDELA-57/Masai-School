// Key for localStorage
const STORAGE_KEY = 'userNotes';

// Get references to the DOM elements
const noteText = document.getElementById('note-text');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const message = document.getElementById('message');

/**
 * Key Requirement 1: Load notes on page load.
 */
function loadNotes() {
    const savedNotes = localStorage.getItem(STORAGE_KEY);
    if (savedNotes) {
        // Display the saved notes in the text area
        noteText.value = savedNotes;
        message.textContent = "Notes loaded successfully!";
    } else {
        message.textContent = "No saved notes found.";
    }
}

/**
 * Save button handler: Saves notes to localStorage.
 */
saveBtn.addEventListener('click', () => {
    const currentNotes = noteText.value.trim();

    // Key Requirement 2: Use proper validation to ensure no empty notes are saved.
    if (currentNotes === "") {
        message.textContent = "Error: Cannot save empty notes.";
        return;
    }

    // Save notes to localStorage
    localStorage.setItem(STORAGE_KEY, currentNotes);
    message.textContent = "Notes saved successfully! (Persists across sessions)";
});

/**
 * Clear button handler: Deletes stored notes from localStorage.
 */
clearBtn.addEventListener('click', () => {
    // Check if notes exist before clearing
    if (localStorage.getItem(STORAGE_KEY)) {
        // Delete the stored notes
        localStorage.removeItem(STORAGE_KEY);
        
        // Also clear the text area content
        noteText.value = ""; 
        message.textContent = "Notes cleared successfully!";
    } else {
        message.textContent = "No notes to clear.";
    }
});

// Initial call to load notes when the script runs (also called via body onload)
loadNotes();