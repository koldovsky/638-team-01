(function () {
    const product = JSON.parse(localStorage.product);
    const slides = [
        `<img src="${product.image}" alt="white chair">`,
        `<img src="${product.image}" alt="white chair">`,
        `<img src="${product.image}" alt="white chair">`,
        `<img src="${product.image}" alt="white chair">`,
    ];

    let currentSlide = 0;
    function showCurrentSlide() {
        const slideContainer = document.querySelector(".container-carousel .slide");
        slideContainer.innerHTML = slides[currentSlide];
    }
    
    function showMiniCarousel(){
        const rowContainer = document.querySelector(".container-carousel-row .slide-rows");
        for (let k = 0; k < slides.length; k++) {
            rowContainer.innerHTML += `<img ${'class="demo"'} src="${product.image}" alt="white chair">`;
        }
            let demo = document.querySelectorAll(".slide-rows .demo");
            demo[currentSlide].classList.add("active");
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();
        let demo = document.querySelectorAll(".slide-rows .demo");

        for(let j = 0; j < demo.length; j++){
                demo[j].classList.remove("active");
                demo[currentSlide].classList.add("active");
        }
    }
    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showCurrentSlide();

        let demo = document.querySelectorAll(".slide-rows .demo");
        for(let i = 0; i < demo.length; i++){
                demo[i].classList.remove("active");
                demo[currentSlide].classList.add("active");
        }
    }
    
    showCurrentSlide();
    showMiniCarousel();
    document.querySelector(".next").addEventListener('click', nextSlide);
    document.querySelector(".prev").addEventListener('click', prevSlide);
})();