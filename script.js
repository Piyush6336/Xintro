document.querySelector(".open-menu").addEventListener("click", () => {
  document.querySelector(".overlay").classList.add("active");
  document.querySelector(".mobile-nav").classList.add("show");
  document.querySelector(".open-menu").style.display = "none";
  document.querySelector(".close-menu").style.display = "block";
});

document.querySelector(".close-menu").addEventListener("click", () => {
  document.querySelector(".overlay").classList.remove("active");
  document.querySelector(".mobile-nav").classList.remove("show");
  document.querySelector(".open-menu").style.display = "block";
  document.querySelector(".close-menu").style.display = "none";
});

// Dropdown toggle
document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", () => {
    const list = item.querySelector(".dropdown-list");
    if (list.classList.contains("show")) {
      list.classList.remove("show");
      item.classList.remove("link-open");
    } else {
      list.classList.add("show");
      item.classList.add("link-open");
    }
  });
});
