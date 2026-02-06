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
const whatsappButton = document.getElementById("whatsappButton");

let current = 0;

// Play video function
function playVideo(index) {
  if (index >= videos.length) return;

  player.src = videos[index];
  player.muted = true;
  player.playsInline = true;
  player.autoplay = true;
  player.preload = "auto";

  player.load();

  player.oncanplaythrough = () => {
    player.style.transition = "opacity 1s ease-in-out";
    player.style.opacity = 1;
    player.play().catch(err => console.warn("Autoplay blocked:", err));
  };
}

// On video end
player.addEventListener("ended", () => {
  player.style.opacity = 0; // fade out
  current++;

  setTimeout(() => {
    playVideo(current);

    if (current === videos.length - 1) {
      whatsappButton.style.display = "block";
    }
  }, 1000); // 1s fade-out between videos
});

// Start first video after 2-second black
window.addEventListener("load", () => {
  setTimeout(() => {
    playVideo(current);
  }, 2000);
});

// Story text fade-in on scroll
window.addEventListener("scroll", () => {
  if(window.scrollY > window.innerHeight * 1.2) {
    storyText.classList.add("visible");
  }
});
