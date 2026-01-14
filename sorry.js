// Simple fade in for message
const messagePaper = document.querySelector('.message-paper');

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

if (messagePaper) {
    messagePaper.style.opacity = '0';
    messagePaper.style.transform = 'translateY(20px)';
    messagePaper.style.transition = 'all 0.6s ease-out';
    observer.observe(messagePaper);
}
