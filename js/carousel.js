(function () {
    const product = JSON.parse(localStorage.product);
    const slides = [
        `<img src="${product.image}" alt="white chair">`,
        `<img src="./img/best__selling-products/pink-chair.png" alt="white chair">`,
        `<img src="./img/best__selling-products/green-chair.png" alt="white chair">`,
        `<img src="./img/best__selling-products/white-chair.png" alt="white chair">`,
    ];

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector(".container-carousel .slide");
        slideContainer.innerHTML = slides[currentSlide];
        
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();
    }
    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showCurrentSlide();
    }
    
    showCurrentSlide();
    document.querySelector(".next").addEventListener('click', nextSlide);
    document.querySelector(".prev").addEventListener('click', prevSlide);
})();

/*Test*/
 
(function () {
    const product = JSON.parse(localStorage.product);
    const rows = [
        `<img class="demo" src="${product.image}" alt="white chair">`,
        `<img class="demo" src="${product.image}" alt="white chair">`,
        `<img class="demo" src="${product.image}" alt="white chair">`,
        `<img class="demo" src="${product.image}" alt="white chair">`,
    ];
    const rowContainer = document.querySelector(".container-carousel-row .slide-rows");
    for (const row of rows) {
        rowContainer.innerHTML += row;
    }
})(); 