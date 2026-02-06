const videos = [
  "assets/videos/intro-darkness.mp4",
  "assets/videos/emergence-walk.mp4",
  "assets/videos/world-unfold-walk.mp4"
];

const player = document.getElementById("videoPlayer");
const storyText = document.querySelector(".story-text");

let current = 0;

function playVideo(index) {
  if (index >= videos.length) return;

  player.src = videos[index];
  player.muted = true;
  player.playsInline = true;
  player.load();

  player.play().catch(() => {
    console.log("Autoplay prevented");
  });
}

player.addEventListener("ended", () => {
  current++;
  playVideo(current);
});

// START AFTER 2 SECONDS OF DARKNESS
setTimeout(() => {
  playVideo(current);
}, 2000);

// TEXT ON SCROLL
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    storyText.classList.add("visible");
  }
});
