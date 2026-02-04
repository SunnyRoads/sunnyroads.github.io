const button = document.getElementById("lavaButton");

let redirected = false;

// Show button after exactly 6 seconds
setTimeout(() => {
  button.style.opacity = "1";
  button.style.pointerEvents = "auto";
}, 6000);

// Auto redirect after 10 seconds (if no click)
setTimeout(() => {
  if (!redirected) {
    fadeAndGo();
  }
}, 10000);

// Click handler
button.addEventListener("click", () => {
  redirected = true;
  fadeAndGo();
});

// Fade out + redirect
function fadeAndGo() {
  document.body.style.transition = "opacity 1s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "main.html";
  }, 1000);
}
