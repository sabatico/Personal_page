document.querySelectorAll('.job').forEach(job => {
    job.addEventListener('mouseover', function(event) {
        showOverlay(event, this.id, true);
    });
    job.addEventListener('click', function(event) {
        showOverlay(event, this.id, false);
    });
});

function showOverlay(event, jobId, isHover) {
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    const overlayText = document.getElementById('overlayText');

    // Update content based on jobId
    overlayImage.src = getImageForJob(jobId); // Replace with actual function
    overlayText.textContent = getTextForJob(jobId); // Replace with actual function

    if (isHover) {
        overlay.style.left = event.clientX + 'px';
        overlay.style.top = event.clientY + 'px';
        overlay.style.transform = 'scale(1)';
    } else {
        overlay.style.left = '50%';
        overlay.style.top = '50%';
        overlay.style.transform = 'translate(-50%, -50%) scale(1)';
    }

    overlay.style.display = 'block';
}

function getImageForJob(jobId) {
    // Return image URL based on jobId
}

function getTextForJob(jobId) {
    // Return text based on jobId
}

// Close overlay on mouseout or after click
const overlay = document.getElementById('overlay');
overlay.addEventListener('mouseout', () => overlay.style.display = 'none');
document.addEventListener('click', (event) => {
    if (!event.target.matches('.job')) {
        overlay.style.display = 'none';
    }
});
