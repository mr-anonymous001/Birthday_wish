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
function createFloatingFlower(initialPhase = 0) {
    const element = document.createElement('div');
    element.className = 'floating-flower';
    element.textContent = flowers[Math.floor(Math.random() * flowers.length)];

    // Random horizontal position
    element.style.left = Math.random() * 100 + '%';

    // Varied sizes for depth effect (1rem to 2.5rem)
    const size = Math.random() * 1.5 + 1;
    element.style.fontSize = size + 'rem';

    // Animation duration (25-40 seconds)
    const duration = Math.random() * 15 + 25;
    element.style.animationDuration = duration + 's';

    // Use NEGATIVE delay to start animation at different phases
    // This creates the continuous effect - flowers are at different stages
    const negativeDelay = -(initialPhase * duration);
    element.style.animationDelay = negativeDelay + 's';

    // Random sway amount for natural movement
    element.style.setProperty('--sway-amount', (Math.random() * 60 + 30) + 'px');
    element.style.setProperty('--rotation', (Math.random() * 360) + 'deg');

    return element;
}

// Create initial 30 floating flowers staggered across animation phases
for (let i = 0; i < 30; i++) {
    // Distribute flowers across the entire animation cycle (0 to 1 = 0% to 100%)
    const phase = Math.random(); // Random phase from 0 to 1
    const flower = createFloatingFlower(phase);
    floatingContainer.appendChild(flower);
}

// Continuously add new flowers at regular intervals for endless flow
setInterval(() => {
    // Always add a new flower from the bottom
    const flower = createFloatingFlower(0);
    floatingContainer.appendChild(flower);

    // Keep flower count reasonable by removing oldest ones
    const allFlowers = floatingContainer.querySelectorAll('.floating-flower');
    if (allFlowers.length > 35) {
        allFlowers[0].remove();
    }
}, 1500);

// Smooth page transition
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.4s ease';
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});
