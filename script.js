// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Footer year
document.getElementById('yr').textContent = new Date().getFullYear();

// Mobile nav toggle
const burger = document.querySelector('.burger');
const list = document.querySelector('.nav ul');
burger?.addEventListener('click', () => {
  const open = list.style.display === 'flex';
  list.style.display = open ? 'none' : 'flex';
  list.style.flexDirection = 'column';
  list.style.position = 'absolute';
  list.style.top = '64px';
  list.style.right = '5vw';
  list.style.background = '#FFF8F2';
  list.style.padding = '20px';
  list.style.borderRadius = '14px';
  list.style.boxShadow = '0 20px 60px rgba(0,0,0,.12)';
});
