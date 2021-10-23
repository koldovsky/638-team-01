(function () {
    const faveFinds = [
        {
            id: 1,
            title: 'Bring brightness to the interior',
            descriptionHeader: 'Get 15% off on colorful 2020 furniture collections.',
            description: `Set bright accents in your interior.<br>
                            Shop the collections of selected designers.`,
            image: 'img/best__selling-products/yellow-chair.jpg'
            
        },
        {
            id: 2,
            title: 'Black & white are always in trend',
            descriptionHeader: 'Only black and white furniture collections. Nothing extra.',
            description: `Top models of furniture & lamps.<br>
                            Find your inspiration in our B&W collections.`,
            image: 'img/best__selling-products/black-chair.jpg'
            
        },
    ];
    function showPictures(faveFinds) {
        const furniture = document.querySelector(".black-bright__furniture");
        for (const find of faveFinds) {
            furniture.innerHTML += `
            <div class="black-bright__furniture__container">
                <img src="${find.image}" alt="yellow chair">
                <div class="black-bright__furniture__containerText">
                    <div class="bright-container__header">
                        <p>${find.title}</p>
                    </div>
                    <div class="bright-container__title">
                        <h4>${find.descriptionHeader}</h4>
                    </div>
                    <div class="bright-container__footer">
                        <p>${find.description}</p>
                    </div>
                    <a href="#our-fave" type="button" class="bright-container__button"><span>learn more &#x2192;</span></a>
                </div>
            </div>
            `
        }
    }
    showPictures(faveFinds);
})();