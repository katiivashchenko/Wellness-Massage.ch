// Sanftes Scrollen bei Klick auf Menü-Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Verhindert das Standardverhalten des Links

    const targetId = this.getAttribute('href').substring(1); // Holt die ID der Zielsektion
    const targetElement = document.getElementById(targetId); // Findet das Ziel-Element

    if (targetElement) { // Überprüft, ob das Ziel-Element existiert
      window.scrollTo({
        top: targetElement.offsetTop - 20, // Scrollt mit kleinem Abstand zur gewünschten Sektion
        behavior: 'smooth' // Sanftes Scrollen
      });
    }
  });
});

// Funktion für Animation (Beispiel für sanftes Erscheinen der Sektionen)
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('section');
  
  // Fügt die 'fade-in' Klasse nur hinzu, wenn die Sektion noch nicht sichtbar ist
  sections.forEach(section => {
    section.classList.add('fade-in');
  });
});

// Funktion für Animation basierend auf dem Scrollen
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  document.querySelectorAll('section').forEach(section => {
    const sectionOffsetTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Fügt die Klasse für Animation hinzu, wenn die Sektion im sichtbaren Bereich erscheint
    if (sectionOffsetTop - 200 < scrollY && sectionOffsetTop + sectionHeight > scrollY) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
});
