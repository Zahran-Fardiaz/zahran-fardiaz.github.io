// Set up the Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // The animation triggers when 15% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // If the element scrolls into view
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add the visible class
            observer.unobserve(entry.target); // Stop observing so it only animates once
        }
    });
}, observerOptions);

// Find all elements with the 'fade-in' class and tell the observer to watch them
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});