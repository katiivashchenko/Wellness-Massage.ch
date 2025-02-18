// Sanftes Scrollen bei Klick auf Menü-Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Verhindert das Standardverhalten des Links

    const targetId = this.getAttribute('href').substring(1); // Holt die ID der Zielsektion
    const targetElement = document.getElementById(targetId); // Findet das Ziel-Element

    window.scrollTo({
      top: targetElement.offsetTop - 20, // Scrollt mit kleinem Abstand zur gewünschten Sektion
      behavior: 'smooth' // Sanftes Scrollen
    });
  });
});

// Funktion für Animation (Beispiel für sanftes Erscheinen der Sektionen)
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    section.classList.add('fade-in');
  });
});

// Funktion für Animation basierend auf dem Scrollen
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Fügt die Klasse für Animation hinzu, wenn die Sektion im sichtbaren Bereich erscheint
  document.querySelectorAll('section').forEach((section, index) => {
    if (section.offsetTop - 200 < scrollY) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
});
