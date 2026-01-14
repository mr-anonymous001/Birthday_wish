// Simple fade in animation for wishes
const wishItems = document.querySelectorAll('.wish-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

wishItems.forEach(item => {
    observer.observe(item);
});
