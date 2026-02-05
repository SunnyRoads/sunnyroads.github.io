const video1 = document.getElementById("video-1");
const video2 = document.getElementById("video-2");

// Start first video after 3 seconds
setTimeout(() => {
  video1.play().catch(() => {});
  video1.style.opacity = "1";
}, 3000);

// Crossfade to second video near the end of video 1
video1.addEventListener("timeupdate", () => {
  if (
    video1.duration &&
    video1.currentTime > video1.duration - 1.2
  ) {
    if (video2.paused) {
      video2.play().catch(() => {});
      video2.style.opacity = "1";
      video1.style.opacity = "0";
    }
  }
});
