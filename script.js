document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const parent = link.parentElement;
    const dropdown = parent.querySelector(".dropdown-list");
    const arrow = parent.querySelector(".arrow");

    // Toggle class
    link.classList.toggle("link-open");
    dropdown.classList.toggle("show");

    if (link.classList.contains("link-open")) {
      arrow.src = "./assets/images/icon-arrow-up.svg";
    } else {
      arrow.src = "./assets/images/icon-arrow-down.svg";
    }
  });
});

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay");
const mobileNav = document.querySelector(".mobile-nav");

openMenu.addEventListener("click", () => {
  overlay.classList.add("active");
  mobileNav.classList.add("show");
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  overlay.classList.remove("active");
  mobileNav.classList.remove("show");
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});
