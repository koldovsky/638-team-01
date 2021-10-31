(function () {
    const product = JSON.parse(localStorage.product);
    const productInformation = document.querySelector(".product-information-description");
    productInformation.innerHTML = `
    <h2>in stock</h2>
    <h4>${product.title}</h4>
    <p class="code">Product code 15</p>
    <p class="price">${product.price}</p>
    <div class="add-to-cart">
    <div class="number">
	<button class="number-minus" type="button" onclick="this.nextElementSibling.stepDown(); this.nextElementSibling.onchange();">&#9660;</button>
	<input type="number" min="0" value="0">
	<button class="number-plus" type="button" onclick="this.previousElementSibling.stepUp(); this.previousElementSibling.onchange();">&#9650;</button>
    </div>
    <button class="add-button" type="button">Add to Cart</button>
    </div>
    <div class="description">
    <p>${product.description}</p>
    </div>
    `
})();