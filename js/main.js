// js/main.js — Nav scroll effect, mobile menu, active links

function smoothScroll(id){
  document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
}

// Nav shrink
const navbar = document.getElementById('navbar');
window.addEventListener('scroll',()=>{
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Active nav highlight
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');
const secObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      navLinks.forEach(l => {
        const href = l.getAttribute('href');
        if (href === '#' + e.target.id) {
          l.classList.add('active');
          l.style.color = 'var(--cyan)';
        } else {
          l.classList.remove('active');
          l.style.color = '';
        }
      });
    }
  });
},{threshold:0.22}); // Lower threshold for better sensitivity on long sections
sections.forEach(s=>secObs.observe(s));


const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');

// Toggle sidebar
menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
  menuBtn.classList.toggle('active');
});

// Close when clicking overlay
overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  menuBtn.classList.remove('active');
});

// Close when clicking links
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    menuBtn.classList.remove('active');
  });
});


const closeBtn = document.getElementById('sidebarClose');

// Close when clicking X button
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  menuBtn.classList.remove('active');
});