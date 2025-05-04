var isClicked= false;
const button = document.getElementById('languages-button');
const image = document.getElementById('arrow');
const originalSrc = '../assets/images/Arrow_Bottom.svg';
const clickSrc = '../assets/images/Arrow_Top.svg';

const languagesDropdown = document.getElementById('languages-dropdown');


button.addEventListener('mouseout', function() {
    if(!isClicked)
        image.src = originalSrc;
});
button.addEventListener('click', function() {
    if (isClicked) {
        image.src = originalSrc;
        isClicked = false;
        languagesDropdown.classList.add('hidden');
    } else {
        image.src = clickSrc;
        isClicked = true;   
        languagesDropdown.classList.remove('hidden');
    }
    event.stopPropagation();
});
document.addEventListener('click', function() {
    if (isClicked) {
        image.src = originalSrc;
        isClicked = false;
        languagesDropdown.classList.add('hidden');
    }
});

function changeLanguage(lang) {
    window.location.href = "/"+lang+"/";
}
