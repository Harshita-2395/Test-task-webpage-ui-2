// Show offcanvas menu on page load
var myOffcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasScrolling'));
myOffcanvas.show();


var mainContent = document.getElementById('mainContent');

// Function to adjust padding based on offcanvas visibility
function adjustPadding() {
    if (myOffcanvas._isShown) {
        mainContent.style.paddingLeft = '150px'; // Adjust left padding when offcanvas is shown
    } else {
        mainContent.style.paddingLeft = '0'; // Reset left padding when offcanvas is hidden
    }
}

// Show offcanvas menu on page load
myOffcanvas.show();

// Toggle padding when offcanvas is shown or hidden
myOffcanvas._element.addEventListener('shown.bs.offcanvas', adjustPadding);
myOffcanvas._element.addEventListener('hidden.bs.offcanvas', adjustPadding);


