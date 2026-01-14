// Countdown Timer - January 25th, 2026 at 12:00 AM (midnight tonight)
const targetDate = new Date('2026-01-25T00:00:00').getTime();

const countdownWrapper = document.getElementById('countdownWrapper');
const cardWrapper = document.getElementById('cardWrapper');
const greetingCard = document.getElementById('greetingCard');
const openButton = document.getElementById('openButton');
const nextHint = document.getElementById('nextHint');
const viewButton = document.getElementById('viewButton');

// Check if bypass is enabled
function isBypassEnabled() {
    return localStorage.getItem('bypassTimer') === 'true';
}

// Enable bypass
function enableBypass() {
    localStorage.setItem('bypassTimer', 'true');
    showCard();
}

// Show card (bypass timer)
function showCard() {
    if (countdownWrapper) {
        countdownWrapper.style.display = 'none';
    }
    if (cardWrapper) {
        cardWrapper.style.display = 'block';
        cardWrapper.classList.add('revealed');
    }
}

// Check bypass on load
if (isBypassEnabled()) {
    showCard();
}

// Timer elements
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // If countdown is finished
    if (distance < 0) {
        countdownWrapper.style.display = 'none';
        cardWrapper.style.display = 'block';
        cardWrapper.classList.add('revealed');
        return true; // Timer complete
    }

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update display with leading zeros
    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');

    return false; // Timer still running
}

// View button functionality
if (viewButton) {
    viewButton.addEventListener('click', function (e) {
        e.stopPropagation();
        enableBypass();
    });
}

// Initial update (only if bypass is not enabled)
let isComplete = false;
if (!isBypassEnabled()) {
    isComplete = updateCountdown();
}

// Update every second if not complete and bypass is not enabled
if (!isComplete && !isBypassEnabled()) {
    const timerInterval = setInterval(() => {
        if (updateCountdown()) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Card opening functionality (only works when timer is complete)
if (openButton) {
    openButton.addEventListener('click', function (e) {
        e.stopPropagation();
        openCard();
    });
}

if (greetingCard) {
    greetingCard.addEventListener('click', function () {
        if (!this.classList.contains('opened')) {
            openCard();
        }
    });
}

function openCard() {
    if (greetingCard) {
        greetingCard.classList.add('opened');

        // Show the continue link after card opens
        setTimeout(() => {
            if (nextHint) {
                nextHint.classList.add('visible');
            }
        }, 800);
    }
}
