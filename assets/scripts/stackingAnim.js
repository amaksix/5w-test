/*document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product-container");
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        let scrollingDown = scrollTop > lastScrollTop;
        lastScrollTop = scrollTop;

        let stackedCount = 0;

        products.forEach((product, index) => {
            let rect = product.getBoundingClientRect();
            
            if (rect.top <= 0) {
                product.style.zIndex = stackedCount + 1;
                stackedCount++;
            } else {
                product.style.zIndex = 0;
            }
        });

        // Reverse unstacking when scrolling up
        if (!scrollingDown) {
            for (let i = products.length - 1; i >= 0; i--) {
                let rect = products[i].getBoundingClientRect();
                if (rect.top > 0) {
                    products[i].style.zIndex = 0;
                }
            }
        }
    });
});*/
