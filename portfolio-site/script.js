// Mobile menu
const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

// Avatars: fall back to initials if a photo is missing
document.querySelectorAll('.avatar').forEach(el => {
  const img = el.querySelector('img');
  const fallback = () => { img.remove(); el.textContent = el.dataset.initials; };
  if (!img) return;
  if (img.complete && img.naturalWidth === 0) fallback();
  img.addEventListener('error', fallback);
});

// Testimonial carousel arrows
const track = document.querySelector('.testi-track');
const [prev, next] = document.querySelectorAll('.carousel-controls button');
const step = () => (track.querySelector('.testi')?.offsetWidth || 500) + 24;
const update = () => {
  prev.disabled = track.scrollLeft < 8;
  next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
};
[prev, next].forEach(b => b.addEventListener('click', () => track.scrollBy({ left: step() * Number(b.dataset.dir), behavior: 'smooth' })));
track.addEventListener('scroll', update, { passive: true });
window.addEventListener('resize', update);
update();

// Reveal sections on scroll
const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 }) : null;
document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));
