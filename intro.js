// Show coffee at 7 seconds
setTimeout(() => {
  const coffeeLayer = document.querySelector('.coffee');
  coffeeLayer.classList.add('show');
}, 7000);

// Auto redirect at 12 seconds
setTimeout(() => {
  window.location.href = 'main.html';
}, 12000);
