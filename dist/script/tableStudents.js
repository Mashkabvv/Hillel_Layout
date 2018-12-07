function addStudents() {

    let btnSave = document.querySelector(`#btnSave`);
    let btnSite = document.querySelector(`#btnSite`);
    let inputForm = document.querySelectorAll(`.article__form-input`);
    let inputWebUrl = document.querySelector(`#inputWebUrl`);
    let form = document.querySelector(`.article__form`);

    form.addEventListener(`input`, makeBtnActive);
    
    function makeBtnActive(event) {
        !event.target.value
            ?alert(`Заполните все поля`)
            :btnSave.disabled = false;
    }
    
    function addInputWebSite() {
        btnSite.addEventListener(`click`, followWebSite);
        function followWebSite() {
            window.location = inputWebUrl.value;
        }
    }
    addInputWebSite();


}
addStudents();