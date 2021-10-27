(async function (){

  const response = await fetch('fave-products.json');
  const products = await response.json();
  
  
  

  function renderProducts(products) {
    const productsContainer = document.querySelector(".our-fave-products-armchairs");
    for (const product of products) {
      
      if (product.quantity <= 0) {
        productsContainer.innerHTML += `
        <div class="our-fave-products-armchairs">
        <div class="our-fave-armchairs-elements">
            <div class="our-fave-armchairs-elements-img-outstock">
                <div class="our-fave-armchairs-elements-img">
                    <a href="our-fave-products-list.html" class = "fave-product-list-button" ><img data-id="${product.id}" src="${product.imageB}" alt="${product.name}"></a>
                </div>
                <div class="our-fave-armchairs-elements-out-stock">Out of stock</div>
            </div>
            <div class="our-fave-armchairs-elements-text">
                <a href="our-fave-products-list.html" class = "fave-product-list-button disp-block">
                    <p>${product.name}</p>
                </a>
            </div>
            <div class="our-fave-armchairs-elements-price">
                <p>${product.price}</p>
            </div>
            <div class="our-fave-elements-button">
                <a href="#" class="button-order" id="not-active-button"><span>ORDER NOW</span></a>
            </div>
        </div>
        </div>
        `
      } else  {
        productsContainer.innerHTML +=`
        <div class="our-fave-products-armchairs">
            <div class="our-fave-armchairs-elements">
                <div class="our-fave-armchairs-elements-img">
                    <a href="our-fave-products-list.html" class="fave-product-list-button"> <img data-id="${product.id}" src="${product.imageB}" alt="${product.name}"></a>
                </div>
                <div class="our-fave-armchairs-elements-text">
                    <a href="our-fave-products-list.html" class="fave-product-list-button disp-block" >
                        <p>${product.name}</p>
                    </a>
                </div>
                <div class="our-fave-armchairs-elements-price">
                    <p>${product.price}</p>
                </div>
                <div class="our-fave-elements-button">
                    <a href="#" class="button-order"><span>ORDER NOW</span></a>
                    
                </div>
            </div>
          </div>
       `
      }
      
    }
    document.querySelectorAll('.fave-product-list-button')
    .forEach( listButton => listButton.addEventListener('click', productListClick));
  }

  function productListClick (ev) {
    const productListButton = ev.target;
    const productId = productListButton.dataset.id;
    const product = products.filter( product => product.id === productId)[0];
    localStorage.product = JSON.stringify(product);
  };

renderProducts(products);

})();