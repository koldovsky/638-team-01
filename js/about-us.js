document.getElementById('cat').addEventListener('click', () => {
    meow();
});

document.getElementById('dayNightSwitcher').addEventListener('change', (event) => {
    if (event.target.checked) {
        document.body.classList.add('night')
    } else {
        document.body.classList.remove('night')
    }
    meow();
});

let leafs = [];

document.getElementById('autumnMode').addEventListener('change', (event) => {
    const container = document.querySelector('.about-us-wrapper');

    if (event.target.checked) {
        drawLeafs();
    } else {
        removeLeafs();
    }

    meow();

    function drawLeafs() {
        const total = 50;

        for (let i = 0; i < total; i++) {
            const div = document.createElement('div');
            TweenLite.set(div, { attr: { class: 'leaf' }, x: R(0, window.innerWidth), y: R(-200, -150), z: R(-200, 200)});
            container.prepend(div);
            leafs.push(div);
            animm(div);
        }
    }

    function removeLeafs() {
        leafs.forEach((div) => {
            div.remove();
        });
        leafs = [];
    }

    function animm(elm) {
        TweenMax.to(elm, R(6,15), { y: container.offsetHeight, ease: Linear.easeNone, repeat: -1, delay: -100 });
        TweenMax.to(elm, R(4,8), { x: '+=0', rotationZ: R(0,180), repeat: -1, ease: Sine.easeInOut });
        TweenMax.to(elm, R(2,8), { rotationX: R(0,360), rotationY: R(0,360), repeat: -1, ease: Sine.easeInOut, delay: -5 });
    }

    function R(min, max) {
        return min + Math.random() * (max - min);
    }
});

function meow() {
    const audio = new Audio;
    audio.src = '/audio/cat-meow.mp3';
    audio.play();
}