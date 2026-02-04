// Show coffee and welcome sign at 7 seconds
setTimeout(() => {
  const coffee = document.getElementById('coffeeVideo').parentElement;
  const welcome = document.getElementById('welcomeSign');

  coffee.classList.add('show');       // Coffee slides up + fades in
  welcome.classList.add('show-welcome'); // Welcome sign fades up
}, 7000); // 7 seconds

// Auto-redirect to main website at 12 seconds
setTimeout(() => {
  window.location.href = 'main.html';
}, 12000); // 12 seconds
