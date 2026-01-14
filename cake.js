// Elegant cake interactions
const blowButton = document.getElementById('blowButton');
const wishMessage = document.getElementById('wishMessage');
const flames = document.querySelectorAll('.flame');
const candles = document.querySelectorAll('.candle');

let candlesBlown = 0;

// Click individual candle to blow it out
candles.forEach((candle, index) => {
    candle.style.cursor = 'pointer';

    candle.addEventListener('click', () => {
        const flame = candle.querySelector('.flame');
        if (flame && !flame.classList.contains('blown')) {
            flame.classList.add('blown');
            candlesBlown++;

            if (candlesBlown === flames.length) {
                setTimeout(showWishMessage, 500);
            }
        }
    });
});

function showWishMessage() {
    blowButton.disabled = true;
    blowButton.style.opacity = '0.4';
    wishMessage.classList.remove('hidden');
}

// Blow all candles button
blowButton.addEventListener('click', () => {
    flames.forEach((flame, index) => {
        if (!flame.classList.contains('blown')) {
            setTimeout(() => {
                flame.classList.add('blown');
                candlesBlown++;

                if (candlesBlown === flames.length) {
                    setTimeout(showWishMessage, 400);
                }
            }, index * 120);
        }
    });
});
