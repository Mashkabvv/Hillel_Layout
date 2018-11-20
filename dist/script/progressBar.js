function showProgressBar() {
    let progressLine = document.querySelector(`.article__progress-line`);
    let progress = document.querySelector(`.article__progress`);
    // let k = 0;
    
    // progressLine.style.transition = `transform 5s`;
    // function moveProgress() {
    //     progressLine.style.transform = `translateX(` + (-100) + `%)`;
    // }
    // moveProgress();


    start = 100;
    progressLine.style.width = start + `%`;
   
    
    timerId = setInterval(moveProgress, 50);

    function moveProgress() {
        progressLine.style.transition = `width 3s`;
        if (start < 0) {
            clearInterval(timerId);
        } else {
            start--;
            progressLine.style.width = start + `%`;
        }
    }

    function hideContent() {
        return new Promise((resolve) => {
            //По окончанию анимации вызовется resolve()
            progressLine.addEventListener(`transitionend`, () => {
                resolve();
            })
        })
    }
    // hideContent()
    //     .then(() => console.log(`УРАаааааааа!!!`));

    hideContent()
        .then(function hideImage() {
            let img = document.querySelectorAll(`.article__container-img`);
            for (var i = 0; i < img.length; i++){
                img[i].style.transition = `transform 2s`;
                img[i].style.transform = `scale(0,0)`;
            }
        })
        .then(function hideText() {
            let text = document.querySelectorAll(`.article__container-text`);
            for (var i = 0; i < text.length; i++){
                text[i].style.transition = `transform 2s`;
                text[i].style.transform = `scale(0,0)`;
            }
        })
        .then(function () {
            let caption = document.querySelectorAll(`.article__container-caption`);
            for (var i = 0; i < caption.length; i++){
                caption[i].style.transition = `transform 2s`;
                caption[i].style.transform = `scale(0,0)`;
            }
        });
        
}

showProgressBar();