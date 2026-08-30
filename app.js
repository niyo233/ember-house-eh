// Fullscreen nav overlay toggle
const menuToggle = document.getElementById('menu-toggle');
const navOverlay = document.getElementById('site-nav');
const navLinks = navOverlay.querySelectorAll('a');
const siteHeader = document.querySelector('.site-header');

function openNav() {
  navOverlay.classList.add('open');
  menuToggle.setAttribute('aria-expanded', 'true');
  menuToggle.setAttribute('aria-label', 'Close menu');
}

function closeNav() {
  navOverlay.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
}

menuToggle.addEventListener('click', () => {
  const isOpen = navOverlay.classList.contains('open');
  isOpen ? closeNav() : openNav();
});

navLinks.forEach((link) => {
  link.addEventListener('click', closeNav);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNav();
});

// Header goes from transparent (over the hero) to a solid blurred panel on scroll
function updateHeaderOnScroll() {
  siteHeader.classList.toggle('scrolled', window.scrollY > 40);
}

window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();

// Reservation form — front-end only confirmation (no backend wired yet)
const reserveForm = document.getElementById('reserve-form');
const reserveStatus = document.getElementById('reserve-status');

reserveForm.addEventListener('submit', (e) => {
  e.preventDefault();
  reserveStatus.textContent = "Request received — we'll confirm by email or phone shortly.";
  reserveStatus.className = 'form-status success';
  reserveForm.reset();
});