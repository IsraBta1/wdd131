const temples = [
  {
    templeName: "Santiago Chile Temple",
    location: "Santiago, Chile",
    dedicated: "September 15, 1983",
    area: 20850,
    imageUrl: "images/temple-chile.jpg"
  },
  {
    templeName: "Mexico City Mexico Temple",
    location: "Mexico City, Mexico",
    dedicated: "December 2, 1983",
    area: 116642,
    imageUrl: "images/temple-mexico.jpg"
  },
  {
    templeName: "Bogota Colombia Temple",
    location: "Bogota, Colombia",
    dedicated: "April 24, 1999",
    area: 53500,
    imageUrl: "images/temple-bogota.jpg"
  },
  {
    templeName: "Lima Peru Temple",
    location: "Lima, Peru",
    dedicated: "January 10, 1986",
    area: 96000,
    imageUrl: "images/temple-lima.jpg"
  },
  {
    templeName: "Guayaquil Ecuador Temple",
    location: "Guayaquil, Ecuador",
    dedicated: "August 1, 1999",
    area: 58500,
    imageUrl: "images/temple-guayaquil.jpg"
  },
  {
    templeName: "Sao Paulo Brazil Temple",
    location: "Sao Paulo, Brazil",
    dedicated: "October 30, 1978",
    area: 59116,
    imageUrl: "images/temple-san-pablo.jpg"
  },
  {
    templeName: "Cordoba Argentina Temple",
    location: "Cordoba, Argentina",
    dedicated: "May 17, 2015",
    area: 34369,
    imageUrl: "images/temple-cordoba.jpg"
  },
  {
    templeName: "Cochabamba Bolivia Temple",
    location: "Cochabamba, Bolivia",
    dedicated: "April 30, 2000",
    area: 20500,
    imageUrl: "images/temple-cachabamba.jpg"
  },
  {
    templeName: "Buenos Aires Argentina Temple",
    location: "Buenos Aires, Argentina",
    dedicated: "January 17, 1986",
    area: 17767,
    imageUrl: "images/temple-buenos-aires.jpg"
  },
  {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "August 7, 2005",
    area: 11500,
    imageUrl: "images/temple-aba.jpg"
  },
  {
    templeName: "Cedar City Utah Temple",
    location: "Cedar City, Utah, United States",
    dedicated: "December 10, 2017",
    area: 42657,
    imageUrl: "images/temple-cedar-city.jpg",
},
  {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah, United States",
    dedicated: "May 21, 1888",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/800x500/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Colonia Juarez Chihuahua Mexico Temple",
    location: "Colonia Juarez, Chihuahua, Mexico",
    dedicated: "March 6, 1999",
    area: 6800,
    imageUrl: "images/temple-mexico.jpg"
  }
];

const templeContainer = document.querySelector("main");

function displayTemples(templeList) {
  templeContainer.innerHTML = "";

  templeList.forEach((temple) => {
    const card = document.createElement("figure");
    card.classList.add("grid-item");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} square feet`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    templeContainer.appendChild(card);
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
  navigation.classList.toggle("open", !isOpen);
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const filter = link.textContent;
    let filteredTemples = temples;

    if (filter === "Old") {
      filteredTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.match(/\d{4}/)[0]);
        return year < 1900;
      });
    } else if (filter === "New") {
      filteredTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.match(/\d{4}/)[0]);
        return year > 2000;
      });
    } else if (filter === "Large") {
      filteredTemples = temples.filter((temple) => temple.area > 90000);
    } else if (filter === "Small") {
      filteredTemples = temples.filter((temple) => temple.area < 10000);
    }

    displayTemples(filteredTemples);

    if (window.innerWidth < 768) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      navigation.classList.remove("open");
    }
  });
});

const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;
document.querySelector("#lastModified").textContent += document.lastModified;

displayTemples(temples);