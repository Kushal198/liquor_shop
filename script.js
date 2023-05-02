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

const form = document.getElementById("contact-form");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

// Add event listener to the form on submit
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent default form submission behavior

  // Check if name, email, and message fields are filled out
  if (!nameField.value || !emailField.value || !messageField.value) {
    alert("Please fill out all fields.");
    return;
  }

  // Check if email is in valid format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailField.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  // If all validation passes, submit the form
  form.submit();
});
