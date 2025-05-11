const params = new URLSearchParams(window.location.search);
const category = params.get("category");
let products = allProducts[category] || [];

function renderProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  products.forEach((item, index) => {
    const featuresHTML = item.features.map(f => `<li>${f}</li>`).join("");
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.price} ₽</p>
      <ul>${featuresHTML}</ul>
      <button onclick="addToCart('${item.name}', ${item.price})">Купить</button>
    `;
    container.appendChild(div);
  });
}


function sortItems(order) {
  products.sort((a, b) =>
    order === "asc" ? a.price - b.price : b.price - a.price
  );
  renderProducts();
}

document.addEventListener("DOMContentLoaded", renderProducts);
