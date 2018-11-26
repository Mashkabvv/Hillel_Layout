function addSlider() {

    // var sliderWrap = document.querySelector(`.article__slider-wrap`);
    var slider = document.querySelector(`.article__slider`);
    var linkSlider = document.querySelector(`#slider`);
    var images = document.querySelectorAll(`.article__slider-img`);
    var btnNext = document.querySelector(`.article__btn-next`);

    btnNext.addEventListener(`click`, showSliderNext);
    // btnPrev.addEventListener(`click`, showSliderPrev);
    
    function showSliderNext() {
        
        let k = 0;
        let widthImage = images[0].clientWidth;
        slider.style.transform = `translateX(` + (-widthImage * k) + `px)`;      
        
        function Slider() {
            slider.style.transition = `transform 1s`;
            k++;
            slider.style.transform = `translateX(` + (-widthImage * k) + `px)`;
            
            slider.addEventListener(`transitionend`,function() {
                if (images[k].id === `firstImg`) {
                    slider.style.transition = `none`;
                    k = 0;
                    slider.style.transform = `translateX(` + (-widthImage * k) + `px)`;
                }
                btnNext.removeEventListener(`click`, showSliderNext);
            })

            timerIdForSlider = setTimeout(Slider, 2000);
        }
        Slider();
    }

    // function showSliderPrev() {

    // }

}

addSlider();







