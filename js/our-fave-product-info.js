(function () {

  const product = JSON.parse(localStorage.product);
  const productsContainer = document.querySelector(".main-block");
  productsContainer.innerHTML = `
  <div class="main-block-homepage">
                <a href="#">Store homepage</a>
            </div>
            <div class="main-block-two-sections">
            <div class="main-block-all-img">
            <div class="main-block-big-img-box">
                <div class="main-block-big-img-arrow arrow-prev">
                    <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 2L1.5 13L12.5 24" stroke="#464C5C" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path></svg>
                    <path d="M12.5 2L1.5 13L12.5 24" stroke="#464C5C" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
                    </svg>
                </div>
                <div class="main-block-big-img">
                
                </div>
                <div class="main-block-big-img-arrow arrow-next">
                    <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 24L12.5 13L1.5 2" stroke="#464C5C" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path></svg>
                    <path d="M1.5 24L12.5 13L1.5 2" stroke="#464C5C" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>
                    </svg>
                </div>
            </div>
            <div class="main-block-small-img-box">
                <div class="main-block-small-img-box-img active-arrow">
                    <img src="${product.imageS}" alt="${product.name}">
                </div>
                <div class="main-block-small-img-box-img">
                    <img src="${product.imageS}" alt="${product.name}">
                </div>
                <div class="main-block-small-img-box-img">
                    <img src="${product.imageS}" alt="${product.name}">
                </div>
                <div class="main-block-small-img-box-img">
                    <img src="${product.imageS}" alt="${product.name}">
                </div>
            </div>
        </div>
            <div class="main-block-all-text">
                <div class="main-block-text-instock">
                    <span>In stock</span>
                </div>
                <div class="main-block-text-product-name">
                    <span>${product.name}</span>
                </div>
                <div class="main-block-text-product-code">
                <span> ${product.code}</span>
                </div>
                <div class="main-block-text-product-price">
                    <span>${product.price}</span>
                </div>
                <div class="main-block-text-line-one">
                    <hr>
                </div>
                <div class="main-block-text-quantity-button">
                    <div class="main-block-text-quantity">
                        <input type="number" value="1" >

                    </div>
                    <div class="main-block-text-button">
                        <a><span>ADD TO CART</span></a>
                    </div>
                </div>
                <div class="main-block-text-all-description">
                    <div class="main-block-text-description">
                        <span>Description</span>
                    </div>
                    <div class="main-block-text-line-two">
                        <hr>
                    </div>
                    <div class="main-block-text-abuot">
                        ${product.desription}
                        <br>
                        <br>
                        ${product.dimensions}
                        <br>
                        ${product.size}
                        <br>
                        ${product.materials}
                        <br>
                    </div>
                </div>
            </div>

        </div>
  `

})();