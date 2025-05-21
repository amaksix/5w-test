document.addEventListener("DOMContentLoaded", function () {
     var mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse),(max-width: 480px)');
    if (!mediaQuery.matches)  {
    const block = document.querySelector(".aboutus-fifth-block-container");
    const one =  document.querySelector(".aboutus-fifth-block-left-content-container");
    const two =  document.querySelector(".aboutus-fifth-block-left-right-top-content-container");
    const three =  document.querySelector(".aboutus-fifth-block-left-right-bottom-content-container");
    const headers = document.querySelectorAll(".aboutus-fifth-block-content-header"); 
    const icons =   document.querySelectorAll(".aboutus-fifth-block-content-image"); 
    const texsts = document.querySelectorAll(".aboutus-fifth-block-content-text"); 
    const header = document.querySelector(".aboutus-fifth-block-header");
    const containers = document.querySelectorAll(".forth-block-content-container");
    const  lastContainer = document.querySelector(".forth-block-content-container-last");
    const headers02 = document.querySelectorAll(".forth-block-content-header");
    const body =  document.querySelector(".body");
    function handleScroll() {
        const blockTop = block.getBoundingClientRect().top;
        const windowHeight = window.innerHeight/3;

        if (blockTop <= windowHeight) {
            block.classList.add("aboutus-fifth-block-container-changed");
            one.classList.add("aboutus-fifth-block-left-content-container-changed");
            two.classList.add("aboutus-fifth-block-left-right-top-content-container-changed");
            three.classList.add("aboutus-fifth-block-left-right-bottom-content-changed");
            header.classList.add("aboutus-fifth-block-header-changed");
            lastContainer.classList.add("forth-block-content-container-last-changed");
            headers.forEach((header) => {
                header.classList.add("aboutus-fifth-block-content-header-changed");
            });
            icons.forEach((icon) => {
                icon.classList.add("aboutus-fifth-block-content-image-changed");
            });
            texsts.forEach((text) => {
               text.classList.add("aboutus-fifth-block-content-text-changed");
            });
            containers.forEach((container) => {
                container.classList.add("forth-block-content-container-changed");
             });
             headers02.forEach((header02) => {
                header02.classList.add("forth-block-content-header-changed");
             });
            body.classList.add("body-changed");     
        } else {
            lastContainer.classList.remove("forth-block-content-container-last-changed");
            block.classList.remove("aboutus-fifth-block-container-changed");
            one.classList.remove("aboutus-fifth-block-left-content-container-changed");
            two.classList.remove("aboutus-fifth-block-left-right-top-content-container-changed");
            three.classList.remove("aboutus-fifth-block-left-right-bottom-content-changed");  
            header.classList.remove("aboutus-fifth-block-header-changed");
            headers.forEach((header) => {
                header.classList.remove("aboutus-fifth-block-content-header-changed");
            });   
            icons.forEach((icon) => {
                icon.classList.remove("aboutus-fifth-block-content-image-changed");
            });   
            texsts.forEach((text) => {
                text.classList.remove("aboutus-fifth-block-content-text-changed");
            });   
            containers.forEach((container) => {
                container.classList.remove("forth-block-content-container-changed");
             });
             headers02.forEach((header02) => {
                header02.classList.remove("forth-block-content-header-changed");
             });
            body.classList.remove("body-changed");     
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case the element is already in view
}
});