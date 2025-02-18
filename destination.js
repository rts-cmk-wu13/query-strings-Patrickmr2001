document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    fetch(`/data/destinations.json`)
        .then(response => response.json())
        .then(data => {
            const destination = data.destinations.find(dest => dest.id == id);
            if (destination) {
                const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
                const isFavorite = favorites.includes(id);
                console.log('Favorites:', favorites); // Debugging line
                console.log('Is Favorite:', isFavorite); // Debugging line
                console.log('Destination:', destination); // Debugging line
                document.getElementById('destination-details').innerHTML = `
                <div class="destination_flex">
                    <div class="image-container">
                        <img src="/img/${destination.image}" alt="${destination.title}">
                        ${isFavorite ? '<span class="favorite-icon">&#x2764;</span>' : ''} <!-- Heart icon -->
                    </div>
                    <div class="destination_text">
                        <h1>${destination.title}</h1>
                        <h2>${destination.subtitle}</h2>
                        <p>${destination.text}</p>
                        <ul>
                            ${destination.facilities.map(facility => `<li>${facility}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                `;
                console.log('HTML:', document.getElementById('destination-details').innerHTML); // Debugging line
            } else {
                document.getElementById('destination-details').innerHTML = `<p>Destination not found.</p>`;
            }
        });
});