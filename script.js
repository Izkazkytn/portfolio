// Fungsi Buka Modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Fungsi Tutup Modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Tutup modal jika user klik area di luar kotak modal
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = 'none';
        }
    }
};

// Fungsi buka viewer sertifikat
function openCert(src, title) {
    document.getElementById("cert-viewer-img").src = src;
    document.getElementById("cert-viewer-title").textContent = title;
    openModal("cert-viewer-modal");
}