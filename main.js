const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");

// Initial safety
video1.pause();
video2.pause();

// STEP 1 — Start in total darkness
setTimeout(() => {
  // Fade in Video 1
  video1.style.opacity = "1";
  video1.play();
}, 3000); // 3 seconds of pure black

// STEP 2 — When Video 1 ends
video1.addEventListener("ended", () => {
  // Fade out Video 1
  video1.style.opacity = "0";

  // Short darkness gap
  setTimeout(() => {
    // Fade in Video 2
    video2.style.opacity = "1";
    video2.play();
  }, 1000); // 1 second of darkness between videos
});
