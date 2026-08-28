const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

const latestButton = document.getElementById("latestButton");
const latestMobileMenu = document.getElementById("latestMobileMenu");
const latestArrow = document.getElementById("latestArrow");

const competitionButton = document.getElementById("competitionButton");
const competitionMobileMenu =
    document.getElementById("competitionMobileMenu");
const competitionArrow =
    document.getElementById("competitionArrow");


// ================= MAIN MOBILE MENU =================

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

    const isOpen = !mobileMenu.classList.contains("hidden");

    menuButton.setAttribute("aria-expanded", isOpen);

    if (isOpen) {

        menuIcon.innerHTML = `
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12" />
        `;

    } else {

        menuIcon.innerHTML = `
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
        `;

    }

});


// ================= LATEST =================

latestButton.addEventListener("click", () => {

    latestMobileMenu.classList.toggle("hidden");

    latestArrow.classList.toggle("rotate-180");

});


// ================= COMPETITIONS =================

competitionButton.addEventListener("click", () => {

    competitionMobileMenu.classList.toggle("hidden");

    competitionArrow.classList.toggle("rotate-180");

});