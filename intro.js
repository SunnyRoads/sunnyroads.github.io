
const button = document.getElementById("lavaButton");

// Show button after exactly 6 seconds
setTimeout(() => {
  button.style.opacity = "1";
  button.style.pointerEvents = "auto";
}, 6000);

// On click → fade out → go to main site
button.addEventListener("click", () => {
  document.body.style.transition = "opacity 1s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "main.html";
  }, 1000);
});
