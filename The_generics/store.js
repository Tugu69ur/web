
  let cart = [];

  function addToCart(itemName, price) {
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name: itemName, price: price, quantity: 1 });
    }
    renderCart();
  }

  function renderCart() {
    const cartTableBody = document.querySelector(".cart tbody");
    let total = 0;

    cartTableBody.innerHTML = '';

    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const row = `<tr>
          <td class="border p-4">${item.name}</td>
          <td class="border p-4">$${item.price.toFixed(2)}</td>
          <td class="border p-4">${item.quantity}</td>
        </tr>`;
      cartTableBody.insertAdjacentHTML("beforeend", row);
    });

    const totalRow = `<tr>
        <td class="border p-4 font-bold" colspan="3">Total: $${total.toFixed(2)}</td>
      </tr>`;
    cartTableBody.insertAdjacentHTML("beforeend", totalRow);
  }
  document.querySelectorAll(".product button").forEach(button => {
    button.addEventListener("click", () => {
      const product = button.closest(".product");
      const itemName = product.querySelector(".font-semibold").textContent;
      const price = parseFloat(product.querySelector(".text-gray-700").textContent.replace('$', ''));
      addToCart(itemName, price);
    });
  });

  document.querySelector(".cart button").addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      alert("Thank you for your purchase!");
      cart = []; 
      renderCart(); 
    }
  });
