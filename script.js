const mode = document.querySelector("#mode");
const body = document.querySelector("#body");
const sun = document.getElementById("mode");
// Function to apply theme
function applyTheme(theme) {
  if (theme === "dark") {
    mode.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
    body.style.background = "black";
    body.style.color = "white";
    sun.style.color = "white";
  } else {
    mode.innerHTML = '<i class="fa-solid fa-cloud-moon"></i>';
    body.style.background = "white";
    body.style.color = "black";
    sun.style.color = "black";
  }
}
// Load saved theme or default to light
let modeValue = localStorage.getItem("theme") || "light";
applyTheme(modeValue);

// Toggle theme on click and save it
mode.addEventListener("click", () => {
  modeValue = modeValue === "light" ? "dark" : "light";
  localStorage.setItem("theme", modeValue);
  applyTheme(modeValue);
});
