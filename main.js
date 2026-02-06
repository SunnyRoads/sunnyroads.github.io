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

function playVideo(index) {
  if (index >= videos.length) return;

  player.src = videos[index];
  player.muted = true;
  player.playsInline = true;

  player.load();
  player.play()
    .then(() => { player.style.opacity = 1; })
    .catch(err => { console.warn("Autoplay blocked:", err); });
}

// When video ends, move to next
player.addEventListener("ended", () => {
  current++;
  player.style.opacity = 0;

  setTimeout(() => {
    playVideo(current);

    // Show WhatsApp button after video 5 ends
    if(current === 5 - 1) { // 0-based index
      whatsappButton.style.display = "block";
    }
  }, 1000);
});

// Start first video
playVideo(current);

// Fade-in story text on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight * 1.2) {
    storyText.classList.add("visible");
  }
});
