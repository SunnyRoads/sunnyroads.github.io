
const player = document.getElementById("videoPlayer");

// Exact path to video1
cconst firstVideo = "../assets/videos/Video1.mp4";";

window.addEventListener("load", () => {
  // 2-second black screen
  setTimeout(() => {

    // Set video source
    player.src = firstVideo;
    player.muted = true;        // required for autoplay
    player.playsInline = true;  // required for mobile
    player.autoplay = true;
    player.preload = "auto";

    player.load();

    // Fade in and play when metadata is loaded
    player.addEventListener("loadedmetadata", () => {
      player.style.opacity = 1;
      player.play().catch(err => console.warn("Autoplay blocked:", err));
    });

    // Log any errors
    player.onerror = (e) => {
      console.error("Video failed to load:", e);
    };

  }, 2000); // 2 seconds black
});
