const lavaButton = document.getElementById("lavaButton");

// Show button after 6 seconds
setTimeout(() => {
  lavaButton.style.opacity = "1";
  lavaButton.style.pointerEvents = "auto";
}, 6000);

// Manual click → go to main site
lavaButton.addEventListener("click", () => {
  window.location.href = "main.html";
});

// Auto redirect after 13 seconds
setTimeout(() => {
  window.location.href = "main.html";
}, 13000);
