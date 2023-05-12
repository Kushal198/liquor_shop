let menu = document.getElementById("nav");
let open = document.getElementById("menu-btn");
let close = document.getElementById("close");

function openmenu() {
  menu.style.left = "0";
  open.style.display = "none";
  close.style.display = "block";
}
function closemenu() {
  menu.style.left = "-100%";
  open.style.display = "block";
  close.style.display = "none";
}

let navLink = document.getElementById("");

function change() {
  var nav = document.getElementById("navbar");
  var value = window.scrollY;
  if (value > 85) {
    nav.classList.add("nav-change");
  } else {
    nav.classList.remove("nav-change");
  }
}
window.addEventListener("scroll", change);

const footerCols = document.querySelectorAll(".footer-col");
const mediaQuery = window.matchMedia("(max-width: 768px)");
const iconCaret = document.querySelector(".icon-caret");

function toggleFooterColContent(footerCol) {
  const footerColContent = footerCol.querySelector(".accordin-tabs");
  if (mediaQuery.matches) {
    if (footerCol.classList.contains("active")) {
      footerColContent.style.display = "block";
      // iconCaret.style.transform = "rotate(180deg)";
    } else {
      footerColContent.style.display = "none";
      // iconCaret.style.transform = "rotate(0deg)";
    }
  } else {
    footerColContent.style.display = "block";
  }
}

footerCols.forEach((footerCol) => {
  toggleFooterColContent(footerCol);

  mediaQuery.addEventListener("change", () => {
    toggleFooterColContent(footerCol);
  });

  footerCol.addEventListener("click", () => {
    footerCol.classList.toggle("active");
    toggleFooterColContent(footerCol);
  });
});
