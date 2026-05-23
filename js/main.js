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

function toggleFaq(btn) {
  const body = btn.nextElementSibling;
  const icon = btn.querySelector("i");
  const isOpen = !body.classList.contains("hidden");
  document.querySelectorAll(".faq-body").forEach(function (el) {
    el.classList.add("hidden");
  });
  document
    .querySelectorAll(".faq-body + button i, button + .faq-body")
    .forEach(function () {});
  document
    .querySelectorAll('[onclick="toggleFaq(this)"] i')
    .forEach(function (i) {
      i.style.transform = "";
    });
  if (!isOpen) {
    body.classList.remove("hidden");
    icon.style.transform = "rotate(180deg)";
  }
}
