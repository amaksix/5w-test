
movingTextUpAnim('header-01');
movingTextUpAnim('header-02');
movingTextUpAnim('header-03');
movingTextUpAnim('header-04');
movingTextUpAnim('header-05');


function movingTextUpAnim(elemID) {
    const container = document.getElementById(elemID);
    const text = container.innerHTML; // Preserve HTML content including spans
    container.innerHTML = ''; // Clear the original content

    // Create an Intersection Observer to watch when the text element comes into view
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Use the viewport as the root
        threshold: 1, // Trigger when at least 100% of the element is visible
    });
    observer.container = container;
    observer.text = text;
    observer.observe(container);
}

function animateText(text, container) {
    container.innerHTML = text; // Set initial HTML content
    let globalIndex = 1; // Keep track of global text index for staggered delay

    function wrapTextNodes(node) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
            // Wrap entire text node in a single span
            const textSpan = document.createElement('span');
            textSpan.className = 'letter';
            textSpan.textContent = node.textContent;
            
            // Animate the entire span
            setTimeout(() => {
                textSpan.style.opacity = 1;
                textSpan.style.transform = 'translateY(0)';
            }, globalIndex * 300);
            
            globalIndex++; // Increment global index for consistency
            node.replaceWith(textSpan);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // Process child nodes recursively
            Array.from(node.childNodes).forEach(wrapTextNodes);
        }
    }
    
    Array.from(container.childNodes).forEach(wrapTextNodes);
}

// Intersection Observer callback
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            observer.container.style.opacity = 1; // Make the text container visible
            animateText(observer.text, observer.container); // Start the animation
            observer.disconnect(); // Stop observing once animation starts
        }
    });
}


// Intersection Observer callback
/*function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            observer.container.style.opacity = 1; // Make the text container visible
            animateText(observer.text, observer.container); // Start the letter animation
            observer.disconnect(); // Stop observing once animation starts
        }
    });
}


function movingTextUpAnim(elemID) {
    const container = document.getElementById(elemID);
    const text = container.innerHTML; // Preserve HTML content including spans
    container.innerHTML = ''; // Clear the original content

    // Create an Intersection Observer to watch when the text element comes into view
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Use the viewport as the root
        threshold: 1, // Trigger when at least 100% of the element is visible
    });
    observer.container = container;
    observer.text = text;
    observer.observe(container);
}

function animateText(text, container) {
    container.innerHTML = text; // Set initial HTML content
    let globalIndex = 0; // Keep track of global letter index for staggered delay

    function wrapTextNodes(node) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
            // Split text content into characters
            const fragment = document.createDocumentFragment();
            node.textContent.split('').forEach((char) => {
                const letter = document.createElement('span');
                letter.className = char === ' ' ? 'letter space' : 'letter';
                letter.textContent = char === ' ' ? '\u00A0' : char;
                fragment.appendChild(letter);

                // Animate each letter with a staggered delay
                setTimeout(() => {
                    letter.style.opacity = 1;
                    letter.style.transform = 'translateY(0)';
                }, globalIndex * 40);
                globalIndex++; // Increment global index to maintain sequential animation
            });
            node.replaceWith(fragment);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // Process child nodes recursively
            Array.from(node.childNodes).forEach(wrapTextNodes);
        }
    }
    
    Array.from(container.childNodes).forEach(wrapTextNodes);
}

// Intersection Observer callback
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            observer.container.style.opacity = 1; // Make the text container visible
            animateText(observer.text, observer.container); // Start the letter animation
            observer.disconnect(); // Stop observing once animation starts
        }
    });
}*/