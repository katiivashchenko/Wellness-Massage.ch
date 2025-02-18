// Плавная прокрутка при клике на ссылки меню
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // предотвращаем стандартное поведение ссылки

    const targetId = this.getAttribute('href').substring(1); // получаем ID целевой секции
    const targetElement = document.getElementById(targetId); // находим элемент

    window.scrollTo({
      top: targetElement.offsetTop - 20, // прокручиваем к нужной секции с небольшим отступом
      behavior: 'smooth' // плавная прокрутка
    });
  });
});

// Функция для анимации (пример плавного появления элементов на странице)
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    section.classList.add('fade-in');
  });
});

// Функция для анимации на основе прокрутки
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Добавляем классы для анимации, когда секция появляется в области видимости
  document.querySelectorAll('section').forEach((section, index) => {
    if (section.offsetTop - 200 < scrollY) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
});
