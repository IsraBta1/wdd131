const lastModifiedElement = document.getElementById("lastModified");
const currentYearElement = document.getElementById("currentyear");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.getElementById("primary-navigation");

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

if (menuToggle && primaryNavigation) {
    const closeMenu = () => {
        primaryNavigation.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = primaryNavigation.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });

    primaryNavigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    primaryNavigation.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
            menuToggle.focus();
        }
    });
}

const lastModifiedDate = new Date(document.lastModified);

if (lastModifiedElement) {
    if (!Number.isNaN(lastModifiedDate.getTime())) {
        const formattedDate = lastModifiedDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        lastModifiedElement.textContent = `Last Modification: ${formattedDate}`;
    } else {
        lastModifiedElement.textContent = "Last Modification: unavailable";
    }
}
