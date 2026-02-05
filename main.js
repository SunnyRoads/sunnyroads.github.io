const video = document.getElementById("intro-video");

setTimeout(() => {
  video.play().catch(() => {});
  video.style.opacity = "1";
}, 3000);
