const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('#menu button');
const counter = document.getElementById('counter');
let current = 0;

function showSlide(index) {
  current = (index + slides.length) % slides.length;

  document.body.classList.toggle('home-active', current === 0);

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === current);
  });

  buttons.forEach((button) => {
    button.classList.toggle('active', Number(button.dataset.slide) === current);
  });

  if (counter) {
    counter.textContent = `${current + 1} / ${slides.length}`;
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    showSlide(Number(button.dataset.slide));
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') showSlide(current + 1);
  if (event.key === 'ArrowLeft') showSlide(current - 1);
});

showSlide(0);
