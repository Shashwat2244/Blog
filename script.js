// Example of JavaScript animations using GSAP library
// Make sure to include GSAP in your HTML file

// Fade in animation for blog segments
const segments = document.querySelectorAll('.col-md-4');
segments.forEach((segment) => {
  gsap.from(segment, { opacity: 0, duration: 1, delay: 0.5 });
});

// Add your additional JavaScript code here
