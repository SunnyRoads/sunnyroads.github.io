const player = document.getElementById("videoPlayer");

// Path to Video 1
const firstVideo = "assets/videos/Video1.mp4";

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

    // Log errors if video fails to load
    player.onerror = (e) => {
      console.error("Video failed to load:", e);
    };

  }, 2000); // 2 seconds black
});
