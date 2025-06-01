document.addEventListener('DOMContentLoaded', () => {
  const transition = document.querySelector('.page-transition');
  
  // Initial page load animation
  transition.style.transform = 'translateY(100%)';
  transition.style.transition = 'transform 0.6s ease-in-out';
  
  // Handle navigation transitions
  document.querySelectorAll('a').forEach(link => {
    // Only handle internal links
    if (link.href.startsWith(window.location.origin)) {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.href;
        
        // Transition out
        transition.style.transform = 'translateY(0)';
        
        setTimeout(() => {
          window.location.href = target;
        }, 600);
      });
    }
  });
});

// Add fade-in animations for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements with fade-in class
document.querySelectorAll('.fade-in').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(element);
});