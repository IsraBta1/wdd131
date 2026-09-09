const username = "IsraelBta1";
const repository = "wdd131";
const lastModifiedElement = document.getElementById("lastModified");
const currentYearElement = document.getElementById("currentyear");

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

fetch(`https://api.github.com/repos/${username}/${repository}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        const pushedAt = data?.pushed_at;
        if (!pushedAt) {
            throw new Error("The repository data did not include a pushed_at field.");
        }

        const lastGitUpdate = new Date(pushedAt);
        const formattedDate = lastGitUpdate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        if (lastModifiedElement) {
            lastModifiedElement.textContent = `Last Modification: ${formattedDate}`;
        }
    })
    .catch((error) => {
        console.error("Failed to fetch the update date from GitHub:", error);
        if (lastModifiedElement) {
            lastModifiedElement.textContent = "Last Modification: unavailable";
        }
    });
