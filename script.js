let cartCount = 0;

function addToCart(productName) {
  cartCount++;

  document.getElementById("cart-count").textContent = cartCount;

  alert(productName + " foi adicionado ao carrinho!");
}

function subscribe(event) {
  event.preventDefault();

  const message = document.getElementById("newsletter-message");

  message.textContent =
    "E-mail cadastrado com sucesso! 💗 (Demonstração)";

  event.target.reset();
}

function demoWhatsapp() {
  alert(
    "💬 Este é um WhatsApp demonstrativo.\n\nBella Aura é uma empresa fictícia criada para portfólio."
  );
}
