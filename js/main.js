const menuBtn = document.getElementById("menu-btn");
const mobileDropdown = document.getElementById("mobile-dropdown");
const menuIcon = document.getElementById("menu-icon");

menuBtn.addEventListener("click", () => {
  mobileDropdown.classList.toggle("hidden");

  if (mobileDropdown.classList.contains("hidden")) {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  } else {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  }
});

document.querySelectorAll("#mobile-dropdown a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileDropdown.classList.add("hidden");
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  });
});
