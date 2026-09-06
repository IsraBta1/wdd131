// Obtener el año actual para el copyright
const today = new Date();
document.getElementById("currentyear").textContent = today.getFullYear();

// Obtener la fecha de última modificación del documento
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;