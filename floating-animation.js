// Minimal floating elements - subtle and elegant
const elements = ['♡', '✧', '❀', '✦'];
const floatingContainer = document.getElementById('floatingElements');

// Create subtle floating elements
function createFloatingElement() {
    const element = document.createElement('div');
    element.className = 'floating-element';
    element.textContent = elements[Math.floor(Math.random() * elements.length)];
    element.style.left = Math.random() * 100 + '%';
    element.style.fontSize = (Math.random() * 0.6 + 0.8) + 'rem';
    element.style.animationDuration = (Math.random() * 10 + 20) + 's';
    element.style.animationDelay = (Math.random() * 8) + 's';
    return element;
}

// Create initial 12 floating elements
for (let i = 0; i < 12; i++) {
    floatingContainer.appendChild(createFloatingElement());
}

// Replenish floating elements slowly
setInterval(() => {
    const count = floatingContainer.querySelectorAll('.floating-element').length;
    if (count < 12) {
        const element = createFloatingElement();
        element.style.animationDelay = '0s';
        floatingContainer.appendChild(element);
    }
}, 5000);

// Smooth page transition
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.4s ease';
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});
