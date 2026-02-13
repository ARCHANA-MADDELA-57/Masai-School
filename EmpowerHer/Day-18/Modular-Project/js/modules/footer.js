
/**
 * Creates and returns the Footer UI element.
 * @returns {HTMLElement} The created <footer> element.
 */
export function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <style>
            footer { 
                background-color: #f4f4f4; 
                padding: 10px 20px; 
                text-align: center; 
                position: fixed; 
                bottom: 0; 
                width: 100%;
                box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
            }
        </style>
        <p>&copy; 2023 Modular JS App. All rights reserved.</p>
    `;
    return footer;
}