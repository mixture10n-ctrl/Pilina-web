const ham = document.getElementById("hamburgerBtn");
const nav = document.getElementById("mobileNav");

ham.addEventListener("click", () => {
  ham.classList.toggle("open");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});
