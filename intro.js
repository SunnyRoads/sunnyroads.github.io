const startBtn = document.getElementById("startBtn");
const coffee = document.getElementById("coffee");
const sunrise = document.getElementById("sunrise");
const fade = document.getElementById("fade");

// Tap to start
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  coffee.play();
});

// Coffee ends → Sunrise starts
coffee.addEventListener("ended", () => {
  coffee.style.display = "none";
  sunrise.style.display = "block";
  sunrise.play();
});

// Sunrise ends → fade to black
sunrise.addEventListener("ended", () => {
  fade.style.opacity = "1"; // full black overlay
});
