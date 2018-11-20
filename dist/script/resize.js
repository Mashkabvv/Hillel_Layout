let sizeBrowser = document.querySelector(`#sizeBrowser`);

window.addEventListener(`resize`, showSize);

var timerIdForTable;
function showSize() {
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    var size = `${width} x ${height}`;
    
    clearTimeout(timerIdForTable);
    function noteSize() {
        sizeBrowser.innerHTML = size;
    }
    timerIdForTable = setTimeout(noteSize, 2000);
}























