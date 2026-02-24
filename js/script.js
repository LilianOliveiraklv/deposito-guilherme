// Animações suaves ao scroll
const animated = document.querySelectorAll('.animate');

window.addEventListener('scroll', () => {
  animated.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

animated.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all .6s ease';
});
// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute('href'));
    if (alvo) {
      alvo.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
window.addEventListener('load', () => {
  const menu = document.querySelector('.menu');
  if (!menu) return;

  function controlarMenu() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    const noFinal = scrollTop + windowHeight >= docHeight - 10;

    if (scrollTop > 80 && !noFinal) {
      menu.classList.add('hide');
    } else {
      menu.classList.remove('hide');
    }
  }

  controlarMenu();
  window.addEventListener('scroll', controlarMenu);
});

