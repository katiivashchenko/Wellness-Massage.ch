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
      review2: '„Maniküre, tolle Qualität!“ - Anna K.',
      contact: 'Kontakt',
      priceList: 'Preisliste',
      advantages: 'Unsere Vorteile',
    },
    en: {
      title: 'Wellness & Massage',
      intro: 'Professional massages, manicures, pedicures, waxing, and laser hair removal.',
      services: 'Our Services',
      review1: '“Great massage, very relaxing!” - Lisa M.',
      review2: '“Manicure, great quality!” - Anna K.',
      contact: 'Contact',
      priceList: 'Price List',
      advantages: 'Our Advantages',
    },
    ru: {
      title: 'Велнес & Массаж',
      intro: 'Профессиональные массажи, маникюр, педикюр, восковая эпиляция и лазерная эпиляция.',
      services: 'Наши услуги',
      review1: '«Отличный массаж, очень расслабляющий!» - Лиза М.',
      review2: '«Маникюр, отличное качество!» - Анна К.',
      contact: 'Контакты',
      priceList: 'Цены',
      advantages: 'Наши преимущества',
    }
  };

  // Инициализация текста на странице при загрузке
  changeLanguage();
});
