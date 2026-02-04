const coffeeVideo = document.getElementById("coffeeVideo");
const coffeeLayer = document.querySelector(".coffee");

// Start coffee at exactly 7 seconds
setTimeout(() => {
  coffeeLayer.classList.add("show");
  coffeeVideo.currentTime = 0;
  coffeeVideo.play();
}, 7000);

// Auto redirect at 12 seconds
setTimeout(() => {
  window.location.href = "main.html";
}, 12000);
