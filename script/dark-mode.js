/**
 * Dark Mode Enable Logic
 * 2026 by Dilson Torrefiel
 */

// Initialize Toggle Counter
let count = 0;

function enableDarkMode() {
  // Increment
  count++;

  // Access the <html> element
  const root = document.documentElement;
  const btn = document.getElementById("btn");

  // Modulo logic
  if (count % 2 !== 0) {
    // Add a new data property: data-theme="dark"
    root.setAttribute("data-bs-theme", "dark");
    btn.setAttribute("class", "btn btn-dark dark-mode-btn");
  } else {
    root.removeAttribute("data-bs-theme");
    btn.setAttribute("class", "btn btn-light dark-mode-btn");
  }
}
