function toggleMenu() {
    const menu = document.querySelector('.all_proparti');
    menu.classList.toggle('show');
}





 document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    alert("Right-click is disabled on this page.");
});

document.addEventListener("keydown", function(e) {
    // CTRL+U, CTRL+S, CTRL+C, CTRL+Shift+I
    if ((e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.key === 's') ||
        (e.ctrlKey && e.key === 'c') ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.key === 'F12')) {
        e.preventDefault();
        alert("This action is disabled on this page.");
    }
});

document.addEventListener("selectstart", function(e) {
    e.preventDefault();
});

function obfuscate() {
    var msg = "Protected Content!";
    console.log(msg);
}
obfuscate();






// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", () => {
    const customCursor = document.getElementById('customCursor');

    // Ensure customCursor element is found
    if (customCursor) {
        document.addEventListener('mousemove', (e) => {
            // Update cursor position based on mouse coordinates
            customCursor.style.left = `${e.pageX}px`;
            customCursor.style.top = `${e.pageY}px`;
        });
    } else {
        console.error("Custom cursor element not found.");
    }
});
