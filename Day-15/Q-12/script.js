// Get references to the DOM elements
const addBtn = document.getElementById('add-btn');
const removeBtn = document.getElementById('remove-btn');
const contentArea = document.getElementById('content-area');

/**
 * 1. Adds a new paragraph to the content-area.
 * Uses document.createElement() and parent.appendChild().
 */
addBtn.addEventListener('click', () => {
    // Create the new <p> element
    const newParagraph = document.createElement('p');
    
    // Set the content
    newParagraph.textContent = "This is a new paragraph.";
    
    // Append the new <p> to the <div>
    contentArea.appendChild(newParagraph);
});

/**
 * 2. Removes the last paragraph from the content-area.
 * Uses parent.removeChild().
 */
removeBtn.addEventListener('click', () => {
    // Get all current child elements (paragraphs) of the content-area
    const paragraphs = contentArea.children;

    // Check if there are any paragraphs to remove
    if (paragraphs.length > 0) {
        // Get the last paragraph element (last item in the collection)
        const lastParagraph = paragraphs[paragraphs.length - 1];
        
        // Remove the last paragraph using removeChild()
        contentArea.removeChild(lastParagraph);
    } else {
        console.log("No paragraphs left to remove.");
    }
});