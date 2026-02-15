function openLetter(pageNumber) {
    // Play music only on the first interaction
    const music = document.getElementById('backgroundMusic');
    if (music.paused) {
        music.play().catch(e => console.log("Audio play blocked"));
    }

    // Hide all modals
    const allModals = document.querySelectorAll('.modal');
    allModals.forEach(modal => modal.style.display = 'none');

    // Show the specific page
    const targetModal = document.getElementById('modal' + pageNumber);
    if (targetModal) {
        targetModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    }
}

function closeAll() {
    const allModals = document.querySelectorAll('.modal');
    allModals.forEach(modal => modal.style.display = 'none');
    document.body.style.overflow = 'auto';
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
});
