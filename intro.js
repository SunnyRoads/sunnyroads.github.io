const startBtn = document.getElementById("startBtn");
const coffee = document.getElementById("coffee");
const sunrise = document.getElementById("sunrise");
const fade = document.getElementById("fade");

// Tap to start intro
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  coffee.play();
});

// When Coffee ends → start Sunrise
coffee.addEventListener("ended", () => {
  coffee.style.display = "none";
  sunrise.style.display = "block";
  sunrise.play();
});

// When Sunrise ends → fade to black and go to main site
sunrise.addEventListener("ended", () => {
  fade.style.opacity = "1"; // fade overlay

  setTimeout(() => {
    window.location.href = "Mainpage/index.html"; // change to your main page
  }, 1000); // 1 second fade
});
