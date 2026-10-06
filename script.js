// ===============================
// DARK MODE TOGGLE
// ===============================

const themeToggle = document.querySelector("#theme-toggle");

// Get saved theme from the browser
const savedTheme = localStorage.getItem("theme");

// Apply saved theme when the page loads
if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    updateThemeButton();
}


// Toggle between light and dark mode
function toggleTheme() {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {

        document.documentElement.removeAttribute("data-theme");

        localStorage.setItem("theme", "light");

    } else {

        document.documentElement.setAttribute("data-theme", "dark");

        localStorage.setItem("theme", "dark");
    }

    updateThemeButton();
}


// Update the button text/icon
function updateThemeButton() {

    if (!themeToggle) {
        return;
    }

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {

        themeToggle.textContent = "☀️ Light Mode";
        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    } else {

        themeToggle.textContent = "🌙 Dark Mode";
        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );
    }
}


// Add click event to theme button
if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
}


// ===============================
// MOBILE NAVIGATION
// ===============================

const menuToggle = document.querySelector("#menu-toggle");
const navigation = document.querySelector(".site-nav");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navigation.classList.toggle("nav-open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );
    });


    // Close mobile menu after clicking a link
    const navLinks =
        navigation.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("nav-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        });

    });

}