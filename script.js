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

// Load theme on page load — DEFAULT = LIGHT MODE
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    // User has chosen a theme before → respect it
    applyTheme(savedTheme);
  } else {
    // Default to LIGHT mode for first‑time visitors
    applyTheme("light");
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

  window.location.href = `mailto:way2bonus@gmail.com?subject=${subject}&body=${body}`;

  document.getElementById("form-status").textContent =
    "Your email app should now open. If not, please send manually to way2bonus@gmail.com.";

  return false;
}

// Hero button message
function showMessage() {
  alert("Welcome to Way2Bonus! Your journey to rewards starts now.");
}

function copyAndGo(code, url) {
  navigator.clipboard.writeText(code)
    .then(() => {
      window.open(url, "_blank");
      alert(`Code "${code}" copied! Redirecting you now.`);
    })
    .catch(() => {
      alert("Unable to copy automatically. Please copy the code manually: " + code);
      window.open(url, "_blank");
    });
}

function toggleMenu() {
  document.querySelector(".nav-right").classList.toggle("open");
}

// You control this value anywhere in your code:
let bonusStatus = "Available";
//let bonusStatus = "None";

function openBonusPopup() {
  const modal = document.getElementById("bonusModal");
  const fill = document.querySelector(".dollar-fill");

  modal.style.display = "flex";

  let cycle = 0;
  let progress = 0;

  fill.style.height = "0%";

  const interval = setInterval(() => {
    progress += 25;
    fill.style.height = progress + "%";

    if (progress >= 100) {
      cycle++;
      progress = 0;

      setTimeout(() => {
        fill.style.height = "0%";
      }, 300);
    }

    if (cycle >= 1) {
      clearInterval(interval);

      setTimeout(() => {
        modal.style.display = "none";
        fill.style.height = "0%";

        openResultModal();
      }, 600);
    }

  }, 1000);
}

function openResultModal() {
  const resultModal = document.getElementById("resultModal");
  const resultText = document.getElementById("resultText");
  const bonusLinkBtn = document.getElementById("bonusLinkBtn");

  if (bonusStatus === "Available") {
    resultText.textContent = "Free coffee from Capital One Cafe on MLB Mondays!";
    bonusLinkBtn.href = "https://coffree.capitalone.com/sms/?mc=BP&cid=fzqpufjqcf";
	//bonusLinkBtn.href = "https://coffree.capitalone.com/sms/?cid=rqhjcz0eps&mc=IN";
    bonusLinkBtn.style.display = "inline-block";
  } else {
    resultText.textContent = "No daily bonus available at the moment.";
    bonusLinkBtn.style.display = "none";
  }

  resultModal.style.display = "flex";
}

function closeResultModal() {
  document.getElementById("resultModal").style.display = "none";
}
// PAGINATION FOR FREEBIES PAGE
function setupPagination() {
  const list = document.getElementById("freebies-list");
  if (!list) return; // Only run on freebies page

  const items = Array.from(list.children);
  const itemsPerPage = 6;
  let currentPage = 1;

  function renderPage(page) {
    currentPage = page;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    items.forEach((item, index) => {
      item.style.display = index >= start && index < end ? "block" : "none";
    });

    renderPaginationButtons();
  }

  function renderPaginationButtons() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    // Previous button
    if (currentPage > 1) {
      const prev = document.createElement("button");
      prev.textContent = "Previous";
      prev.onclick = () => renderPage(currentPage - 1);
      pagination.appendChild(prev);
    }

    // Numbered buttons
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      if (i === currentPage) btn.classList.add("active");
      btn.onclick = () => renderPage(i);
      pagination.appendChild(btn);
    }

    // Next button
    if (currentPage < totalPages) {
      const next = document.createElement("button");
      next.textContent = "Next";
      next.onclick = () => renderPage(currentPage + 1);
      pagination.appendChild(next);
    }
  }

  renderPage(1);
}

// Run pagination after page loads
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  applyTheme(savedTheme || "light");
  setupPagination();
};

const rotatingWords = ["rewards", "deals", "bonuses"];
const rotatingEl = document.getElementById("rotating-word");
let wordIndex = 0;

setInterval(() => {
  rotatingEl.classList.add("hidden");

  setTimeout(() => {
    wordIndex = (wordIndex + 1) % rotatingWords.length;
    rotatingEl.textContent = rotatingWords[wordIndex];
    rotatingEl.classList.remove("hidden");
  }, 400); // matches CSS fade duration
}, 2000); // 2-second interval

//For pop up on FREEBIES
function openGCPopup() {
  document.getElementById("gc-popup-overlay").style.display = "flex";
}

function closeGCPopup() {
  document.getElementById("gc-popup-overlay").style.display = "none";
}

window.addEventListener("load", function () {
  setTimeout(() => {
    openGCPopup();
  }, 2400); // 2.4 seconds
});
