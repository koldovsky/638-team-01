(function () {
    const product = JSON.parse(localStorage.product);
    const productInformation = document.querySelector(".product-information-description");
    productInformation.innerHTML = `
    <h2>in stock</h2>
    <h4>${product.title}</h4>
    <p class="code">Product code 15</p>
    <p class="price">${product.price}</p>
    <div class="add-to-cart">
    <input type="number" value="0" step="1" min="0" required>
    <button type="button">Add to Cart</button>
    </div>
    <div class="description">
    <p>${product.description}</p>
    </div>
    `
})();