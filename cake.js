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
    
    // Trigger party poppers
    createPartyPoppers();
    
    // Show huge birthday message
    setTimeout(() => {
        const birthdayMessage = document.getElementById('birthdayMessage');
        if (birthdayMessage) {
            birthdayMessage.classList.remove('hidden');
            
            // Hide birthday message after 3 seconds
            setTimeout(() => {
                birthdayMessage.classList.add('hidden');
            }, 3000);
        }
    }, 300);
    
    // Show wish message after a delay
    setTimeout(() => {
        wishMessage.classList.remove('hidden');
    }, 4000);
}

// Create party poppers animation
function createPartyPoppers() {
    const container = document.getElementById('partyPoppers');
    if (!container) return;
    
    const popperCount = 50; // Number of confetti pieces
    const colors = ['#b76e79', '#ffd700', '#ff6b9d', '#4ecdc4', '#ffe66d', '#ff6b6b', '#95e1d3'];
    const emojis = ['🎉', '🎊', '🎈', '✨', '⭐', '💫', '🌟'];
    
    // Clear any existing poppers
    container.innerHTML = '';
    
    for (let i = 0; i < popperCount; i++) {
        const popper = document.createElement('div');
        popper.className = 'party-popper';
        
        // Random position
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        // Random properties
        const color = colors[Math.floor(Math.random() * colors.length)];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        const size = Math.random() * 20 + 15;
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 0.5;
        
        // Random direction
        const angle = (Math.random() * 360) * (Math.PI / 180); // Convert to radians
        const distance = Math.random() * 200 + 150;
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;
        
        popper.style.left = startX + '%';
        popper.style.top = startY + '%';
        popper.style.fontSize = size + 'px';
        popper.style.color = color;
        popper.style.setProperty('--end-x', endX + 'px');
        popper.style.setProperty('--end-y', endY + 'px');
        popper.style.setProperty('--duration', duration + 's');
        popper.style.setProperty('--delay', delay + 's');
        popper.textContent = emoji;
        
        container.appendChild(popper);
        
        // Remove after animation
        setTimeout(() => {
            if (popper.parentNode) {
                popper.remove();
            }
        }, (duration + delay) * 1000);
    }
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
