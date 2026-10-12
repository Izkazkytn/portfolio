// Open modal function
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Close modal function
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close the modal when the user clicks outside the modal box
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = 'none';
        }
    }
};

// Function to open the certificate viewer
function openCert(src, title) {
    document.getElementById("cert-viewer-img").src = src;
    document.getElementById("cert-viewer-title").textContent = title;
    openModal("cert-viewer-modal");
}