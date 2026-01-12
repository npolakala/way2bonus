// Apply theme (light or dark)
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

// Toggle dark mode manually
function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Load theme on page load
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    // Auto-detect system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }
};

// BACK TO TOP BUTTON
const backToTopBtn = document.createElement("button");
backToTopBtn.className = "back-to-top";
backToTopBtn.textContent = "↑";
document.body.appendChild(backToTopBtn);

backToTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Contact form email sender
function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent("New message from Way2Bonus contact form");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  // Opens user's email app with pre-filled content
  window.location.href = `mailto:npolakala@gmail.com?subject=${subject}&body=${body}`;

  document.getElementById("form-status").textContent =
    "Your email app should now open. If not, please send manually to npolakala@gmail.com.";

  return false;
}

// Hero button message
function showMessage() {
  alert("Welcome to Way2Bonus! Your journey to rewards starts now.");
}
