// Show coffee video and welcome sign at 7 seconds
setTimeout(() => {
  const coffee = document.getElementById('coffeeVideo');
  const welcome = document.getElementById('welcomeSign');

  coffee.style.transition = 'opacity 1.5s ease';
  coffee.style.opacity = 1;

  welcome.classList.add('show-welcome');
}, 7000); // 7 seconds

// Auto-redirect to main website at 12 seconds
setTimeout(() => {
  window.location.href = 'main.html';
}, 12000); // 12 seconds
