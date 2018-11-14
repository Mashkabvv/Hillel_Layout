function changeTabs() {
    let aside = document.querySelector(`.aside`);
    
    aside.addEventListener(`click`, showContent);

    function showContent(event) {
        console.log(event);
        if (event.target.className == `aside__nav-link`) {
            let linkAttribute = event.target.getAttribute(`data-tab`);
            let content = document.querySelectorAll(`.content`);
            
            for (l = 0; l < content.length; l++) {
                (linkAttribute == l)
                ? content[l].style.display = `block`
                : content[l].style.display = `none`
            }


        }
    }
}

changeTabs();