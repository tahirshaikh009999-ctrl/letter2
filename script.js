function openLetter() {
    document.getElementById('letterModal').style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Play music when heart is clicked
    const music = document.getElementById('backgroundMusic');
    music.play().catch(e => {
        console.log('Audio playback failed:', e);
    });
}



function closeLetter() {
    document.getElementById('letterModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}


document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLetter();
    }
});

