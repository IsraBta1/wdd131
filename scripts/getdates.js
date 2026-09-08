const username = "IsraelBta1";
const repository = "wdd131";
const spanId = "lastModified";

fetch(`https://github.com/${username}/${repository}/blob/main/index.html`)

    .then(response => response.json())
    .then(data => {
        const lastGitUpdate = new Date(data.pushed_at);
        const formattedDate = lastGitUpdate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        document.getElementById(spanId).textContent = `Last Modification: ${formattedDate}`;
    })
    .catch(error => {
        console.error('Failed to fetch the update date from GitHub:', error);
    });
