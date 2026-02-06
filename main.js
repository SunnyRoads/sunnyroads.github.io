// Video playlist
const videos = [
  "media/videos/01-dark-intro.mp4",
  "media/videos/02-emerging-walk.mp4",
  "media/videos/03-world-unfold.mp4",
  "media/videos/04-sign-appearance.mp4",
  "media/videos/05-dog-and-sign.mp4"
];

const player = document.getElementById("videoPlayer");
const storyText = document.querySelector(".story-text");
const whatsappButton = document.getElementById("whatsappButton");

let current = 0;

// Function to play a video
function playVideo(index) {
  if(index >= videos.length) return;

  player.src = videos[index];
  player.muted = true;       // required for autoplay
  player.playsInline = true;  // required for mobile
  player.autoplay = true;
  player.preload = "auto";

  player.load();

  // Fade in once video is ready
  player.oncanplaythrough = () => {
    player.style.opacity = 1;
    player.play().catch(err => console.warn("Autoplay blocked:", err));
  };
}

// When a video ends
player.addEventListener("ended", () => {
  player.style.opacity = 0; // fade out
  current++;

  setTimeout(() => {
    playVideo(current);

    // Show WhatsApp button after last video
    if(current === videos.length - 1) {
      whatsappButton.style.display = "block";
    }
  }, 1000); // 1-second fade out
});

// Start first video after slight black delay
window.addEventListener("load", () => {
  setTimeout(() => {
    playVideo(current);
  }, 500); // 0.5-second black screen
});

// Story text fade-in on scroll
window.addEventListener("scroll", () => {
  if(window.scrollY > window.innerHeight * 1.2) {
    storyText.classList.add("visible");
  }
});
