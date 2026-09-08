/
const fechaLegible = new Date(document.lastModified).toLocaleDateString('en-EN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

document.getElementById('lastModified').textContent = "Last Modification: " + fechaLegible;
