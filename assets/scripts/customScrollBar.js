document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".scroll-container");
    const scrollTrack = document.querySelector(".custom-scroll-track");
    const scrollThumb = document.querySelector(".custom-scroll-thumb");
    const items = document.querySelectorAll(".scroll-content-element"); // Select all scroll items
    const totalSections = items.length; // Number of items
    const body = document.body; 

    function updateHighlightBasedOnThumb() {
        // Get thumb position as a percentage of the scroll track
        let thumbLeft = parseFloat(scrollThumb.style.left) || 0;
        let maxThumbPosition = scrollTrack.clientWidth - scrollThumb.clientWidth;
        let thumbPercent = thumbLeft / maxThumbPosition;

        // Calculate which item to highlight based on thumb position
        let currentSection = Math.round(thumbPercent * (totalSections - 1));

        // Apply highlighting
        
        items.forEach((item, index) => {
            if (index === currentSection) {
                item.classList.remove("scroll-content-element");
                item.classList.add("scroll-content-element-active"); // Highlight active section
                item.children[2].classList.add("line-active");
                item.children[0].children[0].classList.add("scroll-content-element-header-left-active");
                item.children[0].children[1].classList.add("scroll-content-element-header-right-active");
            } else {
                item.classList.remove("scroll-content-element-active");
                item.classList.add("scroll-content-element"); // Highlight active section
                item.children[2].classList.remove("line-active");
                item.children[0].children[0].classList.remove("scroll-content-element-header-left-active");
                item.children[0].children[1].classList.remove("scroll-content-element-header-right-active");
            }
        });

    }

    function updateThumbPosition() {
        let scrollPercent = scrollContainer.scrollLeft / (scrollContainer.scrollWidth - scrollContainer.clientWidth);
        let maxThumbPosition = scrollTrack.clientWidth - scrollThumb.clientWidth;
        scrollThumb.style.left = `${scrollPercent * maxThumbPosition}px`;

        updateHighlightBasedOnThumb();
    }

    scrollContainer.addEventListener("scroll", updateThumbPosition);

    let isDragging = false;
    let startX, thumbStartLeft;

    scrollThumb.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        thumbStartLeft = parseFloat(scrollThumb.style.left) || 0;
        scrollThumb.style.cursor = "grabbing";
        body.classList.add("no-select");
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        let deltaX = e.clientX - startX;
        let maxThumbPosition = scrollTrack.clientWidth - scrollThumb.clientWidth;
        let newLeft = Math.max(0, Math.min(thumbStartLeft + deltaX, maxThumbPosition));

        scrollThumb.style.left = `${newLeft}px`;

        let scrollPercent = newLeft / maxThumbPosition;
        scrollContainer.scrollLeft = scrollPercent * (scrollContainer.scrollWidth - scrollContainer.clientWidth);

        updateHighlightBasedOnThumb();
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        scrollThumb.style.cursor = "grab";
        body.classList.remove("no-select");
    });

    updateThumbPosition();
});
