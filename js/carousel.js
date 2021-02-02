
const images = [
    "winter1.jpg",
    "winterFebruary.jpg",
    "winterTerasa.jpg",
    "vzhwinter1.png",
    "servis.jpg",
    "image_portfolio_Forest.jpg",
    "house.jpg",
    "house-forest.png"
];

let currImgIdx = 0;

function showCurrentImage() {
    const imgContainer = document.querySelector('.curr-img');
    imgContainer.src = 'img/' + images[currImgIdx];
}

showCurrentImage();

const nextButton = document.querySelector('.next');
nextButton.addEventListener('click', showNextImg);
function  showNextImg() {
    currImgIdx++;
    if (currImgIdx >= images.length) currImgIdx = 0;
    showCurrentImage();
}
const prevBtn = document.querySelector('.prev');
prevBtn.addEventListener('click', showPrevImg);
function showPrevImg() {
    currImgIdx--;
    if(currImgIdx < 0) {
        currImgIdx = images.length - 1;
    }
    showCurrentImage();
}


