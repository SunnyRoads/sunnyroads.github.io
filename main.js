// LIST OF CINEMATIC VIDEOS (IN ORDER)
const videos = [
  "assets/videos/intro-darkness.mp4",
  "assets/videos/emergence-walk.mp4",
  "assets/videos/world-unfold-walk.mp4"
];

// ELEMENTS
const player = document.getElementById("videoPlayer");
const storyText = document.querySelector(".story-text");

// STATE
let current = 0;

// PLAY A VIDEO BY INDEX
function playVideo(index) {
  if (index >= videos.length) return;

  player.src = videos[index];
  player.muted = true;
  player.playsInline = true;
  player.load();

  player.play().catch(() => {
    console.log("Autoplay prevented (this is normal on some browsers)");
  });
}

// WHEN A VIDEO ENDS → PLAY NEXT
player.addEventListener("ended", () => {
  current++;
  playVideo(current);
});

// START WITH INTENTIONAL DARKNESS (2 SECONDS)
setTimeout(() => {
  playVideo(current);
}, 2000);

// FADE TEXT IN ON SCROLL
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    storyText.classList.add("visible");
  }
});
