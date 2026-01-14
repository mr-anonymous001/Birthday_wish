// Date Lock Check - Redirect if accessed before January 25th, 2026
(function () {
    const unlockDate = new Date('2026-01-13T00:00:00').getTime();
    const now = new Date().getTime();

    if (now < unlockDate) {
        // Redirect to home page if accessed early
        window.location.href = 'index.html';
    }
})();
