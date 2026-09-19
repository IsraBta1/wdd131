const lastModifiedElement = document.getElementById("lastModified");
const currentYearElement = document.getElementById("currentyear");

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
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
