(function () {
    const product = JSON.parse(localStorage.product);
    const productInformation = document.querySelector(".product-information-description");
    productInformation.innerHTML = `
    <h2>in stock</h2>
    <h4>${product.title}</h4>
    <p>Product code 15</p>
    <p>${product.price}</p>
    <div class="add-to-cart">
     <button  type="button">Click me: 0</button>
     <button type="button">Add to Cart</button>
    </div>
    <div class="description">
    <p>${product.description}</p>
    </div>
    `
})();