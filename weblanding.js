  const btn = document.createElement("button");
btn.textContent = "Next Page";
btn.onclick = nextPage;
{
    
}
    const pages = [
        "weblanding.html",
        "index.html",
        "game.html",
        "palindrome.html",
        "tableofdogs.html"
    ];

    function nextPage() {
        // Get the current page filename
        let current = window.location.pathname.split("/").pop();

        // Find its index in the array
        let index = pages.indexOf(current);

        // Move to the next page (wrap around using modulo)
        let next = pages[(index + 1) % pages.length];

        // Navigate to the next page
        window.location.href = next;
    }
    }