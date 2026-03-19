// DARK/LIGHT MODE
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  if(document.body.classList.contains('light-mode')){
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = '🌙';
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    toggleBtn.textContent = '☀️';
  }
});

// MENU MOBILE
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// FORMULÁRIO
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for reaching out! We will contact you soon.');
  form.reset();
});

// FADE-IN AO ROLAR
const fadeElements = document.querySelectorAll('.fade-in');

const checkFade = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade); // mostra elementos já visíveis no carregamento
