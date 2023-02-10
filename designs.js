// Utilized https://www.jslint.com
// For styling/formatting corrections
function getSizePicker() {
    // https://mzl.la/3YiJCMV 1/26/2023
    return document.querySelector("#sizePicker");
}

function getTable() {
    return document.querySelector("#pixelCanvas");
}

function getColorPicker() {
    return document.querySelector("#colorPicker");
}

function makeGrid(row, col) {
    clearGrid();
    reinstateGrid();
    for (let i = 0; i < row; i++) {
        var table = getTable();
        var tableRow = document.createElement("tr");
        table.appendChild(tableRow);
        for (var j = 0; j < col; j++) {
            var tableCol = document.createElement("td");
            tableRow.appendChild(tableCol);
        }
    }
}

function clearGrid() {
    var table = document.querySelector("#pixelCanvas");
    // https://bit.ly/3x9dEXJ 2/2/2023
    table.remove();
}

function reinstateGrid() {
    // https://bit.ly/3K1BZGF 2/09/2023
    var table = document.createElement("table");
    table.id = "pixelCanvas";
    document.body.appendChild(table);
    table.addEventListener("click", function(event) {
        return event.target.style.backgroundColor = colorPicker.value;
    })
}

let sizePicker = getSizePicker();
sizePicker.addEventListener("submit", function(event) {
    // https://bit.ly/3HMU8Fb 2/09/2023
    event.preventDefault();
    makeGrid(sizePicker.inputWidth.value, sizePicker.inputHeight.value);
})

let colorPicker = getColorPicker();
colorPicker.addEventListener("input", function() {
    return colorPicker.value;
})