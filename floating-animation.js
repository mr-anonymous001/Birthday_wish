// Flowing flowers background - beautiful flowery vibe
const flowers = [
    '🌹', // Rose
    '🌸', // Cherry Blossom (similar to jasmine aesthetic)
    '🌺', // Hibiscus
    '🌷', // Tulip
    '🌼', // Sunflower/Daisy
    '💮', // White flower (Jasmine-like)
    '🪷', // Lotus
    '🌻', // Sunflower
    '🏵️', // Rosette
    '❀',  // Decorative flower
    '✿',  // Decorative flower
    '❁',  // Decorative flower
];

const floatingContainer = document.getElementById('floatingElements');

// Create flowing flower elements
function createFloatingFlower(startNow = false, startPosition = null) {
    const element = document.createElement('div');
    element.className = 'floating-flower';
    element.textContent = flowers[Math.floor(Math.random() * flowers.length)];

    // Random horizontal position
    element.style.left = Math.random() * 100 + '%';

    // Varied sizes for depth effect (1rem to 2.5rem)
    const size = Math.random() * 1.5 + 1;
    element.style.fontSize = size + 'rem';

    // Slower animation for graceful flow (25-45 seconds)
    const duration = Math.random() * 20 + 25;
    element.style.animationDuration = duration + 's';

    // No delay - flowers appear immediately
    element.style.animationDelay = '0s';

    // Random sway amount for natural movement
    element.style.setProperty('--sway-amount', (Math.random() * 60 + 30) + 'px');
    element.style.setProperty('--rotation', (Math.random() * 360) + 'deg');

    // For initial load, start flowers at different positions on screen
    if (startPosition !== null) {
        element.style.setProperty('--start-position', startPosition + 'vh');
    }

    return element;
}

// Create initial 25 floating flowers distributed across the screen immediately
for (let i = 0; i < 25; i++) {
    // Distribute flowers at different starting positions (from bottom to top)
    const startPos = Math.random() * 100; // Random position from 0-100vh
    const flower = createFloatingFlower(true, startPos);
    floatingContainer.appendChild(flower);
}

// Continuously replenish flowers for endless flow
setInterval(() => {
    const count = floatingContainer.querySelectorAll('.floating-flower').length;
    if (count < 25) {
        const flower = createFloatingFlower();
        floatingContainer.appendChild(flower);
    }

    // Clean up old flowers that have completed animation
    const allFlowers = floatingContainer.querySelectorAll('.floating-flower');
    if (allFlowers.length > 30) {
        allFlowers[0].remove();
    }
}, 3000);

// Smooth page transition
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.4s ease';
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});
