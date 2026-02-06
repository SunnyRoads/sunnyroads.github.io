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

  player.style.opacity = 0;

  setTimeout(() => {
    player.src = videos[index];
    player.load();
    player.play();

    player.onloadeddata = () => {
      player.style.opacity = 1;
    };
  }, 1500);
}

player.addEventListener("ended", () => {
  current++;
  playVideo(current);
});

playVideo(current);

/* TEXT FADE-IN ON SCROLL */
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    storyText.classList.add("visible");
  }
});
