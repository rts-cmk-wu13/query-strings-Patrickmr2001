fetch("/data/destinations.json")
    .then(response => response.json())
    .then(data => {
        let sectionElm = document.createElement("section");
        sectionElm.classList.add("destination");
        sectionElm.innerHTML = data.destinations.map(destination => `
            <div class="card_grid">
                <div class="card">
                    <img src="/img/${destination.image}" alt="${destination.title}">
                    <a href="destination.html?id=${destination.id}">
                       <i class="fa-solid fa-heart" data-id="${destination.id}"></i> MORE
                    </a>
                </div>
            </div>
        `).join("");
        document.querySelector("#root").append(sectionElm);

        
        document.querySelectorAll(".fa-heart").forEach(icon => {
            const destinationId = icon.getAttribute("data-id");
            if (localStorage.getItem(`favorite-${destinationId}`) === "true") {
                icon.classList.add("red");
            }

            icon.addEventListener("click", () => {
                const isFavorite = localStorage.getItem(`favorite-${destinationId}`) === "true";
                if (isFavorite) {
                    localStorage.setItem(`favorite-${destinationId}`, "false");
                    icon.classList.remove("red");
                } else {
                    localStorage.setItem(`favorite-${destinationId}`, "true");
                    icon.classList.add("red");
                }
            });
        });
    });


const style = document.createElement('style');
style.innerHTML = `
    .fa-heart.red {
        color: red;
    }
`;
document.head.appendChild(style);