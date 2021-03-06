function addTable() {

    var linkTable = document.querySelector(`#table`);
    var articleText = document.querySelector(`.article__text`);
    var formTable = document.querySelector(`.article__form-table`);
    var btn = document.querySelector(`.article__button`);
    var inputRow = document.querySelector(`#inputRow`);
    var inputColumn = document.querySelector(`#inputColumn`);
    var parentTable = document.querySelector(`.article__table-wrap`);

    btn.addEventListener(`click`, createTable);

    function createTable() {
        parentTable.innerHTML = ``;
        var table = document.createElement(`table`);
        table.className = `article__table`;
                
        for (i = 0; i < inputRow.value; i++) {
            var tr = document.createElement(`tr`);
            table. appendChild(tr);
                    
            for (j = 0; j < inputColumn.value; j++) {
                var td = document.createElement(`td`);
                td.className = `article__table-td`;
                tr.appendChild(td);
                var cell = `${tr.rowIndex + 1} x ${td.cellIndex + 1}`;
                table.rows[i].cells[j].setAttribute(`title`, cell);
            }
        }
        parentTable.appendChild(table);
    }
}
addTable();
