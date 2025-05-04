document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".solutions-element");

    function checkElements() {
        const viewportCenter = window.innerHeight / 2;
        const activationRange = 200; // Adjust this range as needed
        let closestElement = null;
        let closestDistance = Infinity;

        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;
            const distance = Math.abs(elementCenter - viewportCenter);

            if (distance < activationRange && distance < closestDistance) {
                closestDistance = distance;
                closestElement = element;
            }
        });

        for (let i = elements.length - 1; i >= 0; i--) {
            const element = elements[i];
            const children = element.children;
        
            if (children.length >= 3) {            
                if (element === closestElement) {
                    // Apply hover classes to the closest element
                    element.classList.replace("solutions-element", "solutions-element-hover");
                    children[0].classList.replace("solution-element-content", "solution-element-content-hover");
                    children[0].classList.replace("solution-element-first", "solution-element-first-hover");
                    children[1].classList.replace("solution-element-content", "solution-element-content-hover");
                    children[1].classList.replace("solution-element-second", "solution-element-second-hover");
                    children[2].classList.replace("solution-element-content", "solution-element-content-hover");
                    children[2].classList.replace("solution-element-third", "solution-element-third-hover");
        
                    // Add class to the next element if it exists (higher in the DOM order)
                    const nextElement = elements[i + 1];
                    if (nextElement) {
                        nextElement.classList.add("solutions-element-hovered-higher");
                    }
        
                    // Add extra class if it's the last element in the reversed order (first in normal order)
                    if (i === 0) {
                        element.classList.replace("solutions-element-last","solutions-element-last-hovered");
                    }
        
                } else {
                    // Revert hover classes for non-closest elements
                    element.classList.replace("solutions-element-hover", "solutions-element");
                    children[0].classList.replace("solution-element-content-hover", "solution-element-content");
                    children[0].classList.replace("solution-element-first-hover", "solution-element-first");
                    children[1].classList.replace("solution-element-content-hover", "solution-element-content");
                    children[1].classList.replace("solution-element-second-hover", "solution-element-second");
                    children[2].classList.replace("solution-element-content-hover", "solution-element-content");
                    children[2].classList.replace("solution-element-third-hover", "solution-element-third");
        
                    // Remove the "next" class if previously added
                    element.classList.remove("solutions-element-hovered-higher");
                    if (i === 0) {
                        element.classList.replace("solutions-element-last-hovered","solutions-element-last");
                    }
                    // Remove the "last" class if previously added
                   
                }
            }
        }
    }

    window.addEventListener("scroll", checkElements);
    checkElements();
});