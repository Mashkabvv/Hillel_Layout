function showProgressBar() {
    let progressLine = document.querySelector(`.article__progress-line`);

    start = 0;
    progressLine.style.width = 100 + `%`;
    progressLine.style.transition = `width 20s`;
    
    timerId = setInterval(moveProgress, 100);
    
    function moveProgress() {
        if (start < 0) {
            clearInterval(timerId);
        } else {
            start++;
            progressLine.style.width = 100 - start + `%`;
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
    hideContent()
        .then(() => console.log(`УРАаааааааа!!!`))

}

showProgressBar();