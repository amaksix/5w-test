window.addEventListener('scroll', () => {
    var mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse),(max-width: 480px)');
    if (!mediaQuery.matches)  {
    const sideMoving = document.getElementsByClassName("about-us-image-back")[0];
    
    const earlyOffset = window.innerHeight*1.2; // Adjust this to start earlier

let scrollPosition = (window.scrollY + earlyOffset) / 7; // Add early offset

const leftLimit = window.innerWidth * 0.14;
const rightLimit = window.innerWidth * 0.25;

// Constrain the movement within the limits
const newPosition = Math.min(Math.max(scrollPosition, leftLimit), rightLimit);

// Convert pixels to vw for setting the style
sideMoving.style.left = `${(newPosition / window.innerWidth) * 100}vw`;
}});