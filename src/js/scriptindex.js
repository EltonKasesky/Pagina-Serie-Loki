const titleH1 = document.querySelector('.h1-title');
const titleH2 = document.querySelector('.h2-title');
const buttonWatchNow = document.querySelector('.watch-now');
const buttonWatchTrailer = document.querySelector('.watch-trailer');

const updateTitlesToUpperCase = () => {
    titleH1.textContent = titleH1.textContent.toUpperCase();
    titleH2.textContent = titleH2.textContent.toUpperCase();
}

const updateButtonsToUpperCase = () => {
    buttonWatchNow.textContent = buttonWatchNow.textContent.toUpperCase();
    buttonWatchTrailer.textContent = buttonWatchTrailer.textContent.toUpperCase();
}

document.addEventListener('DOMContentLoaded', () => {
    updateTitlesToUpperCase();
    updateButtonsToUpperCase();
})