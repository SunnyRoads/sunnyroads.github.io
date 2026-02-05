// Fade in video after 2 seconds
window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('video1');

  setTimeout(() => {
    video.style.opacity = 1;
  }, 2000); // 2000ms = 2 seconds delay
});
