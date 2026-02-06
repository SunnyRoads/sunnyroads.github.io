const startBtn = document.getElementById("startBtn");
const coffee = document.getElementById("coffee");
const sunrise = document.getElementById("sunrise");
const fade = document.getElementById("fade");

// Start on tap
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  coffee.play();
});

// After Coffee ends
coffee.addEventListener("ended", () => {
  coffee.style.display = "none";
  sunrise.style.display = "block";
  sunrise.play();
});

// After Sunrise ends → fade to black then go to main page
sunrise.addEventListener("ended", () => {
  fade.style.opacity = "1"; // fade overlay

  setTimeout(() => {
    window.location.href = "Mainpage/index.html"; // navigate to main page
  }, 600);
});
