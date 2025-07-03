// Select elements
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay");
const mobileNav = document.querySelector(".mobile-nav");
const navLinks = document.querySelectorAll(".nav-link");

// Mobile menu open
openMenu.addEventListener("click", () => {
  mobileNav.style.display = "block";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  overlay.classList.add("active");
});

// Mobile menu close
closeMenu.addEventListener("click", () => {
  mobileNav.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  overlay.classList.remove("active");
});

// Dropdown toggle
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const parent = link.closest(".nav-item");
    const dropdown = parent.querySelector(".dropdown-list");

    // If already open, close it
    if (link.classList.contains("link-open")) {
      link.classList.remove("link-open");
      if (dropdown) dropdown.style.display = "none";
    } else {
      // Close all other dropdowns first
      navLinks.forEach((l) => {
        l.classList.remove("link-open");
        const p = l.closest(".nav-item");
        const d = p.querySelector(".dropdown-list");
        if (d) d.style.display = "none";
      });

      // Open this one
      link.classList.add("link-open");
      if (dropdown) dropdown.style.display = "block";
    }
  });
});
