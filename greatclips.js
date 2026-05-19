// COUPON DATA
document.getElementById("updated-date").textContent = "Updated on 2026-02-12";
const couponData = {
  "$5.99": [
    "https://example.com/599-1",
    "https://example.com/599-2"
  ],
  "$6.99": [
    "https://example.com/699-1",
    "https://example.com/699-2"
  ],
  "$7.99": [
    "https://example.com/799-1"
  ],
  "$8.99": [
    "https://example.com/899-1"
  ],
  "$9.99": [
    "https://example.com/999-1"
  ],
  "$5 Off": [
    "https://example.com/5off-1"
  ],
  "$10 Off": [
    "https://example.com/10off-1"
  ]
};

// RENDER COUPON SECTIONS
const couponContainer = document.getElementById("coupon-sections");

Object.keys(couponData).forEach(price => {
  const block = document.createElement("div");
  block.className = "coupon-block";

  block.innerHTML = `<h2>${price} Coupons</h2>`;

  couponData[price].forEach(link => {
    const a = document.createElement("a");
    a.className = "coupon-link";
    a.href = link;
    a.target = "_blank";
    a.textContent = link;
    block.appendChild(a);
  });

  couponContainer.appendChild(block);
});

// BONUS LIST (right side)
const bonuses = [
  { title: "Moomoo – Up to $1000", url: "index.html#trading" },
  { title: "Instarem – Special FX Rate", url: "index.html#forex" },
  { title: "LemFi – $20 Bonus", url: "index.html#forex" },
  { title: "Chase Disney – $300 Credit", url: "index.html#creditcards" }
];

const bonusList = document.getElementById("bonus-list");

bonuses.forEach(b => {
  const div = document.createElement("div");
  div.className = "bonus-item";

  div.innerHTML = `
    <a href="${b.url}" style="text-decoration:none; color:#333;">
      <strong>${b.title}</strong>
    </a>
  `;

  bonusList.appendChild(div);
});

// SHOW POPUP ON PAGE LOAD
window.addEventListener("load", () => {
  document.getElementById("gc-popup-overlay").style.display = "flex";
});


// CLOSE POPUP
function closeGCPopup() {
  document.getElementById("gc-popup-overlay").style.display = "none";
}
