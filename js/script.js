// Toogle class active (yg ada jadi tidak ada dan sebaliknya)
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Oil-menu di Klik
document.querySelector("#oil-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar Sidebar untuk menghilangkan nav
const oil = document.querySelector("#oil-menu");

document.addEventListener("click", function (e) {
  if (!oil.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
