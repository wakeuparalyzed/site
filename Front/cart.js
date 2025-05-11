function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function addToCart(name, price) {
  const cart = getCart();
  cart.push({ name, price });
  saveCart(cart);
  showCart();
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  showCart();
}

function updateCartCount() {
  const cart = getCart();
  document.getElementById("cart-count").innerText = cart.length;
}

function showCart() {
  const popup = document.getElementById("cart-popup");
  const cart = getCart();
  popup.innerHTML = cart
    .map(
      (item, i) =>
        `<div class="cart-item">
          ${item.name} — ${item.price}₽
          <button onclick="removeFromCart(${i})">✕</button>
        </div>`
    )
    .join("") || "<p>Корзина пуста</p>";
  popup.classList.remove("hidden");
}

function toggleCart() {
  const popup = document.getElementById("cart-popup");
  if (popup.classList.contains("hidden")) {
    showCart();
  } else {
    popup.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", updateCartCount);
