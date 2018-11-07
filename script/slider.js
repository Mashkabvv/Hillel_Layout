var slider = document.querySelector(`.article__slider`);
var images = document.querySelectorAll(`.article__slider-img`);
var linkSlider = document.querySelector(`.aside__nav-slider`);

linkSlider.addEventListener(`click`, showSlider);

function showSlider() {
    formTable.style.display = `none`;
    parentTable.style.display = `none`;
    articleText.style.display = `none`;
    slider.style.display = `block`;

    var k = 0;
     
    function Slider() {
        if (slider.style.display == `none`) {
            clearInterval(timerIdForSlider);
            images[0].classList.add(`showed`);
            
            for (k = 1; k < images.length; k++) {
                images[k].classList.remove(`showed`);
            }
        }
        images[k].classList.remove(`showed`);
        k++;
        if (k >= images.length) {
            k = 0;
        }
        images[k].classList.add(`showed`);
    } 
    var timerIdForSlider = setInterval(Slider, 2000);
}



