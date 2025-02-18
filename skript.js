document.addEventListener('DOMContentLoaded', function() {
    const animationEffect = document.querySelector('.animation-effect');
    animationEffect.classList.add('appear');

    // Интеграция с Google Maps
    initMap();
});

function initMap() {
    const location = { lat: 47.4727, lng: 9.4974 }; // Пример координат для Rorschach, Швейцария
    const map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 14,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
