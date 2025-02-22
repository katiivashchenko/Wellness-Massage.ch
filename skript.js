// Функция для переключения языка
document.addEventListener('DOMContentLoaded', () => {
  const languageSelector = document.getElementById('language'); // Получаем селектор языка
  languageSelector.addEventListener('change', changeLanguage); // Обрабатываем изменение языка

  // Функция для изменения текста на странице в зависимости от выбранного языка
  function changeLanguage() {
    const selectedLanguage = languageSelector.value;
    const textElements = document.querySelectorAll('[data-lang]'); // Все элементы с атрибутом data-lang

    // Проходим по всем элементам и изменяем их текст в зависимости от выбранного языка
    textElements.forEach(element => {
      const langKey = element.getAttribute('data-lang');
      element.textContent = translations[selectedLanguage][langKey];
    });
  }

  // Тексты для разных языков
  const translations = {
    de: {
      title: 'Wellness & Massage',
      intro: 'Professionelle Massagen, Maniküre, Pediküre, Waxing und Laser-Haarentfernung.',
      services: 'Unsere Leistungen',
      review1: '„Tolle Massage, sehr entspannend!“ - Lisa M.',
      review2: '„Maniküre
