// Smooth page transitions
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.classList.contains('active')) return;
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location = this.href;
    }, 350);
    e.preventDefault();
  });
});

document.body.style.opacity = 0;
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s cubic-bezier(.77,0,.18,1)';
    document.body.style.opacity = 1;
  }, 80);
});

// Silly Discord button animation
const discordBtn = document.querySelector('.discord-btn');
if (discordBtn) {
  discordBtn.addEventListener('mouseenter', () => {
    discordBtn.style.transform = 'scale(1.15) rotate(-8deg)';
    discordBtn.style.boxShadow = '0 12px 40px 0 #5865f2cc';
  });
  discordBtn.addEventListener('mouseleave', () => {
    discordBtn.style.transform = '';
    discordBtn.style.boxShadow = '';
  });
  discordBtn.addEventListener('click', () => {
    discordBtn.textContent = 'See you on Discord! 🎉';
    setTimeout(() => {
      discordBtn.textContent = 'Join our Discord!';
    }, 1800);
  });
} 