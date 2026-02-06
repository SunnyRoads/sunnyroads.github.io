// Video playlist
const videos = [
  "assets/videos/intro-darkness.mp4",
  "assets/videos/emergence-walk.mp4",
  "assets/videos/world-unfold-walk.mp4",
  "assets/videos/sunny-roads-sign.mp4",
  "assets/videos/sign-dog-zoom.mp4"
];

const player = document.getElementById("videoPlayer");
const storyText = document.querySelector(".story-text");
const whatsappButton = document.getElementById("whatsappButton");

let current = 0;

// Function to play video
function playVideo(index) {
  if(index >= videos.length) return;

  player.src = videos[index];
  player.muted = true;
  player.playsInline = true;
  player.autoplay = true;
  player.preload = "auto";

  player.load();

  // Fade in video once loaded
  player.oncanplaythrough = () => {
    player.style.opacity = 1;
    player.play().catch(err => console.warn("Autoplay blocked:", err));
  };
}

// When video ends, fade out and move to next
player.addEventListener("ended", () => {
  player.style.opacity = 0;
  current++;

  setTimeout(() => {
    playVideo(current);

    // Show WhatsApp after last video
    if(current === videos.length - 1) {
      whatsappButton.style.display = "block";
    }
  }, 1000); // 1-second fade out
});

// Start first video after slight delay to ensure everything is loaded
window.addEventListener("load", () => {
  setTimeout(() => {
    playVideo(current);
  }, 500); // Half-second delay to prevent initial white flash
});

// Story text fade-in on scroll
window.addEventListener("scroll", () => {
  if(window.scrollY > window.innerHeight * 1.2) {
    storyText.classList.add("visible");
  }
});
