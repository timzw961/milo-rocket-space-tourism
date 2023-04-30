const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visible = nav.getAttribute("data-visible");
    
    if (visible === "false"){
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        navToggle.style.backgroundImage="url(./assets/shared/icon-close.svg)";

    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        navToggle.style.backgroundImage="url(./assets/shared/icon-hamburger.svg)";
    }


});
