function addSlider() {

    // var sliderWrap = document.querySelector(`.article__slider-wrap`);
    var slider = document.querySelector(`.article__slider`);
    var linkSlider = document.querySelector(`#slider`);
    var images = document.querySelectorAll(`.article__slider-img`);
    var asideText = document.querySelector(`#text`);

    asideText.addEventListener(`click`, showSlider);

    function showSlider() {
        // formTable.style.display = `none`;
        // parentTable.style.display = `none`;
        // articleText.style.display = `none`;
        // sliderWrap.style.display = `block`;
        
        var k = 0;
        var widthImage = images[0].clientWidth;
        slider.style.transform = `translateX(` + (-widthImage * k) + `px)`;  
        
        function Slider() {
            slider.style.transition = `transform 0.5s`;
            k++;
            slider.style.transform = `translateX(` + (-widthImage * k) + `px)`;
            
            slider.addEventListener(`transitionend`,function() {
                if (images[k].id === `firstImg`) {
                    slider.style.transition = `none`;
                    k = 0;
                    slider.style.transform = `translateX(` + (-widthImage * k) + `px)`;
                }
            })

            timerIdForSlider = setTimeout(Slider, 2000);
        }
        Slider();
    }

}

addSlider();







