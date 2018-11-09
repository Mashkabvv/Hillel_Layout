var sliderWrap = document.querySelector(`.article__slider-wrap`);
var slider = document.querySelector(`.article__slider`);
var linkSlider = document.querySelector(`.aside__nav-slider`);
var images = document.querySelectorAll(`.article__slider-img`);

linkSlider.addEventListener(`click`, showSlider);

function showSlider() {
    formTable.style.display = `none`;
    parentTable.style.display = `none`;
    articleText.style.display = `none`;
    sliderWrap.style.display = `block`;
    
    var k = 0;
    var widthImage = images[0].clientWidth;
    slider.style.transform = `translateX(` + (-widthImage * k) + `px)`;  
    
    function Slider() {
        // if (sliderWrap.style.display == `none`) {
        //     clearTimeout(timerIdForSlider);
        // }
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
    
 



//     var k = 0;
     
//     function Slider() {
//         if (slider.style.display == `none`) {
//             clearInterval(timerIdForSlider);
//             images[0].classList.add(`showed`);
            
//             for (k = 1; k < images.length; k++) {
//                 images[k].classList.remove(`showed`);
//             }
//         }

//         images[k].classList.remove(`showed`);
//         k++;
//         if (k >= images.length) {
//             k = 0;
//         }
//         images[k].classList.add(`showed`);
//     } 
//     var timerIdForSlider = setInterval(Slider, 2000);
}



