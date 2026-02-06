// Video playlist in correct order
const videos = [
  "mystery/01-dark-intro.mp4",
  "mystery/02-emerging-walk.mp4",
  "mystery/03-world-unfold.mp4",
  "mystery/04-sign-appearance.mp4",
  "mystery/05-dog-and-sign.mp4"
];

const player = document.getElementById("videoPlayer");
const storyText = document.querySelector(".story-text");

let current = 0;

// Play one video at a time
function playVideo(index) {
  if (index >= videos.length) return;

  player.src = videos[index];
  player.style.opacity = 0;   // reset opacity
  player.muted = true;        // required for autoplay
  player.playsInline = true;  // required for mobile
  player.autoplay = true;
  player.preload = "auto";

  player.load();

  // Fade in and play when ready
  player.oncanplaythrough = () => {
    player.style.transition = "opacity 1s ease-in-out";
    player.style.opacity = 1;
    player.play().catch(err => console.warn("Autoplay blocked:", err));
  };
}

// When a video ends, fade out and play next
player.addEventListener("ended", () => {
  player.style.opacity = 0; // fade out
  current++;
  setTimeout(() => {
    playVideo(current);
  }, 1000); // 1s between videos
});

// Start first video after 2-second black screen
window.addEventListener("load", () => {
  setTimeout(() => {
    playVideo(current);
  }, 2000);
});

// Fade-in story text on scroll
window.addEventListener("scroll", () => {
  if(window.scrollY > window.innerHeight * 1.2) {
    storyText.classList.add("visible");
  }
});
