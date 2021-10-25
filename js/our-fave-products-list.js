(function (){

  const products = [
      {
        id : "1",
        name : "Fusion armchair, LEXX",
        code : "Product code 1",
        price : "320,00USD",
        desription : "It is an incredibly stylish armchair in a trendy mustard color. In it, you can recline comfortably and read a book or work on a laptop.",
        dimensions : "Dimensions and materials:",  
        size : "25\" x 32\"",
        materials : "Faux suede, steel",
        imageB : "img/armchairs/fusion-armchair.png",
        imageS : "img/armchairs/fusion-armchair-small.png"
      },
      {
        id : "2",
        name : "Aurora armchair, MDS",
        code : "Product code 2",
        price : "210,00USD",
        desription : "This wide-backed trapezoidal chair will welcome you after or during your hard day and help you relax. It will fit into any interior and is very easy to clean.",
        dimensions : "Dimensions and materials:",  
        size : "28\" x 37\"",
        materials : "Faux suede, wood",
        imageB : "img/armchairs/aurora-armchair.png",
        imageS : "img/armchairs/aurora-armchair-small.png"
      },
      {
        id : "3",
        name : "Cloud armchair, DIX",
        code : "Product code 3",
        price : "150,00USD",
        desription : "Simple design and vibrant turquoise color are the hallmarks of this armchair. It is versatile: you can make this armchair a striking accent in your interior or create an island of tranquility in your office.",
        dimensions : "Dimensions and materials:",  
        size : "28\" x 35\"",
        materials : "Faux suede, wood",
        imageB : "img/armchairs/cloud-armchair.png",
        imageS : "img/armchairs/cloud-armchair-small.png"
      },
      {
        id : "4",
        name : "Jeanine armchair, KUKO",
        code : "Product code 4",
        price : "210,00USD",
        desription : "This is the very armchair in which you want to drown after a hard day. Wide handrails and padded back allow you to take any position in this armchair.",
        dimensions : "Dimensions and materials:",  
        size : "28\" x 35\"",
        materials : "Textile, wood",
        imageB : "img/armchairs/jeanine-armchair.png",
        imageS : "img/armchairs/jeanine-armchair-small.png"
      }
    ];
  
  
  

  function renderProducts(products) {
    const productsContainer = document.querySelector(".our-fave-products-block-all-armchairs");
    for (const product of products) {
      
      if (product.id === "4") {
        productsContainer.innerHTML += `
        <div class="our-fave-armchairs-elements">
            <div class="our-fave-armchairs-elements-img-outstock">
                <div class="our-fave-armchairs-elements-img">
                    <a href="our-fave-products-list.html" class = "fave-product-list-button" data-id="${product.id}"><img src="${product.imageB}" alt="${product.name}"></a>
                </div>
                <div class="our-fave-armchairs-elements-out-stock">Out of stock</div>
            </div>
            <div class="our-fave-armchairs-elements-text">
                <a href="our-fave-products-list.html" class = "fave-product-list-button" data-id="${product.id}">
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
        `
      } else  {
        productsContainer.innerHTML +=`
        <div class="our-fave-products-armchairs">
            <div class="our-fave-armchairs-elements">
                <div class="our-fave-armchairs-elements-img">
                    <a href="our-fave-products-list.html" class="fave-product-list-button" data-id="${product.id}"> <img src="${product.imageB}" alt="${product.name}"></a>
                </div>
                <div class="our-fave-armchairs-elements-text">
                    <a href="our-fave-products-list.html" class="fave-product-list-button" >
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