document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("myVideo");
    let hasScrolled = false;

    // Function to start the video
    function playVideoOnScroll() {
        if (!hasScrolled) {
            hasScrolled = true;
            video.play().catch(error => {
                console.error("Autoplay was prevented:", error);
            });

            // Remove event listeners after the video starts
            window.removeEventListener("wheel", playVideoOnScroll);
            window.removeEventListener("touchmove", playVideoOnScroll);
        }
    }

    // Listen for scroll-like gestures
    window.addEventListener("wheel", playVideoOnScroll); // For desktop
    window.addEventListener("touchmove", playVideoOnScroll); // For mobile
});
