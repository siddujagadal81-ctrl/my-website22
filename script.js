// ================= MOBILE MENU =================
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");

// Open mobile menu
menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
});

// Close mobile menu
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

// Close mobile menu when any nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
});

// ================= SWIPER SLIDER =================
const swiper = new Swiper(".slider-container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});