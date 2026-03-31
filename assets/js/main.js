const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

// Mobile menu toggle
if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth-scroll enhancement for same-page anchors
for (const link of document.querySelectorAll('a[href^="#"]')) {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// Fade-in on scroll
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealItems.forEach((el) => observer.observe(el));
} else {
  revealItems.forEach((el) => el.classList.add('in-view'));
}
