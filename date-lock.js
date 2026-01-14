// Date Lock Check - Redirect if accessed before January 25th, 2026
(function () {
    // Check if bypass is enabled
    const bypassEnabled = localStorage.getItem('bypassTimer') === 'true';
    
    if (bypassEnabled) {
        // Allow access if bypass is enabled
        return;
    }
    
    const unlockDate = new Date('2026-01-25T00:00:00').getTime();
    const now = new Date().getTime();

    if (now < unlockDate) {
        // Redirect to home page if accessed early
        window.location.href = 'index.html';
    }
})();
