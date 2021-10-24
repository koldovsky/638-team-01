(function () {
    const product = JSON.parse(localStorage.product);
    const productContainer = document.querySelector(".container");
    productContainer.innerHTML = `
    <div class="best-selling__products">
                <a href="./best-selling-products-info.html"><img src="${product.image}" alt="white chair"></a>
                <div class="best-selling__products__container">
                    <a class="product-info-button" data-id="${product.id}"  href="./best-selling-products-info.html" class="container__title" href="#">${product.title}</a>
                    <p class="container__price">${product.price}</p>
                    <button class="container__button" type="button">order now</button>
                </div>
            </div>
    `;
})();