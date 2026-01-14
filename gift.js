// Bouquet animation enhancement
const bouquet = document.getElementById('bouquet');

// Add sparkle effect on load
setTimeout(() => {
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach((flower, index) => {
        setTimeout(() => {
            flower.style.animation = 'floatFlower 3s ease-in-out infinite, sparkle 1s ease-out';
        }, index * 100);
    });
}, 500);

// Add sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
        50% { transform: translateY(-5px) rotate(5deg) scale(1.1); }
    }
`;
document.head.appendChild(style);
