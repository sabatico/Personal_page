document.addEventListener("DOMContentLoaded", function() {
    // Function to show the overlay with the specified image
    function showOverlay(imageUrl) {
        console.log("Showing image:", imageUrl); // Console debug
        const overlay = document.getElementById("imageOverlay");
        const overlayImage1 = document.getElementById("overlayImage1");
        overlayImage1.src = imageUrl;
        overlay.style.display = "flex";

        console.log("Showing overlayImage1.src:", overlayImage1.src); 
        // Add load and error event listeners for debugging
        overlayImage1.onload = function() {
            console.log("Image loaded successfully");
        };
        overlayImage1.onerror = function() {
            console.error("Error loading image:", imageUrl);
        };
    }

    // Add click event listeners to elements
    const clickableElements = document.querySelectorAll('.hover-pointer');
    clickableElements.forEach(function(element) {
        element.addEventListener("click", function() {
            const imageUrl = this.getAttribute('data-image-url');
            console.log("Element clicked, URL is:", imageUrl); // Console debug
            showOverlay(imageUrl);
        });
    });

    // Close overlay when clicking outside the image
    document.getElementById("imageOverlay").addEventListener("click", function(event) {
        if (event.target.id === "imageOverlay") {
            this.style.display = "none";
        }
    });

    // Close overlay on pressing the Esc key
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            document.getElementById("imageOverlay").style.display = "none";
        }
    });
});
