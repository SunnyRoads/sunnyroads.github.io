// First video file
const firstVideo = "mystery/01-dark-intro.mp4"; // update with your exact path

const player = document.getElementById("videoPlayer");

// Wait for page load
window.addEventListener("load", () => {

  // 2-second black screen
  setTimeout(() => {

    // Set video source
    player.src = firstVideo;
    player.muted = true;
    player.playsInline = true;
    player.autoplay = true;
    player.preload = "auto";

    player.load();

    // Fade in and play when ready
    player.oncanplaythrough = () => {
      player.style.opacity = 1;
      player.play().catch(err => console.warn("Autoplay blocked:", err));
    };

  }, 2000); // 2 seconds black
});
