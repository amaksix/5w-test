
window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('resize', function() {
      moveChild("explore", "overlay-box");
    });
  });
function moveChild(parentID,childID) {
    const parent = document.getElementById(parentID);
    const child = document.getElementById(childID);
    var mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse),(max-width: 480px)');
    if (mediaQuery.matches)  {
      // Move OUT on mobile
      if (child.parentNode === parent) {
        parent.insertAdjacentElement('afterend', child);
      }
    } else {
      // Move BACK IN on desktop
      if (child.parentNode !== parent) {
        parent.appendChild(child);
      }
    }
  }
  
  // Run on page load
  moveChild("explore","overlay-box");


  