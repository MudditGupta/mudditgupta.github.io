/* Public contact details */
const CONTACT = {
  email: "muditgpt6@gmail.com",
  linkedin: "https://www.linkedin.com/in/muddit-gupta-439340200/"
};

const emailLink = document.querySelector('#email-link');
const linkedinLink = document.querySelector('#linkedin-link');
if (emailLink && CONTACT.email && !CONTACT.email.startsWith('YOUR_')) {
  emailLink.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Product and Business Analysis')}`;
}
if (linkedinLink && CONTACT.linkedin && !CONTACT.linkedin.includes('YOUR-LINKEDIN')) {
  linkedinLink.href = CONTACT.linkedin;
}

document.querySelector('#year').textContent = new Date().getFullYear();

// Experience filters
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.work-card');
filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    filter.classList.add('active');
    const selected = filter.dataset.filter;
    cards.forEach((card) => {
      const kinds = card.dataset.kind.split(' ');
      card.classList.toggle('is-hidden', selected !== 'all' && !kinds.includes(selected));
    });
  });
});

// Mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

// Subtle entrance animation, with reduced-motion support.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}

// Soft spotlight that follows the cursor on experience cards
document.querySelectorAll('.work-card').forEach((card) => {
  card.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--x', `${e.clientX - r.left}px`);
    card.style.setProperty('--y', `${e.clientY - r.top}px`);
  });
});
