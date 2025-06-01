// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.dataset.theme = savedTheme;
}

themeToggle.addEventListener('click', () => {
  const currentTheme = body.dataset.theme;
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  body.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
});

// Mobile menu functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});