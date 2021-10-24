(function () {
    const products = [
        {
            id: "1",
            title: 'Lord armchair, Miedel Home',
            description: `Do you want to feel comfortable and hide from the bad weather? This armchair is perfect for relaxing with a book or a cup of tea. It also provides extra back support.
            Dimensions and materials:
            28" x 38"   
            Faux suede, wood`,
            price: '120,00USD',
            image: './img/best__selling-products/white-chair.png'
        },
        {
            id: "2",
            title: 'Ultimate Green chair, XODO',
            description: `Simple yet functional, this chair is perfect for your minimalistic dining room. It will become a bright spot in your interior design and will awaken your appetite.
            Dimensions and materials:
            21" x 32"
            Plastic`,
            price: '90,00USD',
            image: 'img/best__selling-products/green-chair.png'
        },
        {
            id: "3",
            title: 'Valetta armchair, ZIX studio',
            description: `An armchair in which you will feel what real comfort is. The original design will suit both the bedroom and the living room, or even a home office. Available only in pink.
            Dimensions and materials:
            28" x 35"
            Faux suede, steel`,
            price: '310,00USD',
            image: 'img/best__selling-products/pink-chair.png'
        },
    ];

    function renderProducts(products) {
        const productContainer = document.querySelector(".best-selling");
        for (const product of products) {
            productContainer.innerHTML += `
            <div class="best-selling__products">
                <img src="${product.image}" alt="white chair">
                <div class="best-selling__products__container">
                    <a class="product-info-button" data-id="${product.id}"  href="./best-selling-products-info.html" class="container__title" href="#">${product.title}</a>
                    <p class="container__price">${product.price}</p>
                    <button class="container__button" type="button">order now</button>
                </div>
            </div>
            `
        }
        document.querySelectorAll(".product-info-button")
            .forEach(infoButton => infoButton.addEventListener("click", productInfoClick));
    }
    function productInfoClick(ev) {
        const productInfoButton = ev.target;
        const productId = productInfoButton.dataset.id;
        const product = products.filter(product => product.id === productId)[0];
        localStorage.product = JSON.stringify(product);
    }
    renderProducts(products);
})();