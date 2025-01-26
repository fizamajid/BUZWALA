// Ensure the DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully");

    // Add smooth scrolling to all anchor links
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Search form validation
    const searchForm = document.querySelector(".search form");

    searchForm.addEventListener("submit", (event) => {
        const fromInput = document.getElementById("from").value.trim();
        const toInput = document.getElementById("to").value.trim();
        const dateInput = document.getElementById("date").value;

        if (!fromInput || !toInput || !dateInput) {
            event.preventDefault();
            alert("Please fill out all fields before searching.");
        }
    });
});