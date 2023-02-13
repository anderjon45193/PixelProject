/** 
  * Utilized https://www.jslint.com
  * For styling/formatting corrections
*/

/**
 * @description
 * Returns the sizePicker
 * within the HTML
 */
function getSizePicker() {
    // https://mzl.la/3YiJCMV 1/26/2023
    return document.querySelector("#sizePicker");
}

/**
 * @description
 * Returns the table with the ID
 * #pixelCanvas
 */
function getTable() {
    return document.querySelector("#pixelCanvas");
}

/**
 * @description
 *  Returns the colorPicker
 *  within HTML
 */
function getColorPicker() {
    return document.querySelector("#colorPicker");
}

/**
 * @description clears, reestablishes grid of squares
 * based on user input of rows and columns 
 * @param {int} row 
 * @param {int} col 
 */
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

/**
 * @description
 * Removes the table element with ID
 * #pixelCanvas
 */
function clearGrid() {
    var table = document.querySelector("#pixelCanvas");
    // https://bit.ly/3x9dEXJ 2/2/2023
    table.remove();
}

/**
 * @description 
 * Select table, assign ID
 * of #pixelCanvas and
 * add back to document
 */
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
sizePicker.addEventListener("submit", function(event) { // Add event listener for 'submit' action on size Picker
    // https://bit.ly/3HMU8Fb 2/09/2023
    event.preventDefault(); // Prevents refreshing of page after form submit
    makeGrid(sizePicker.inputWidth.value, sizePicker.inputHeight.value); // Make Grid with user inputs
})

let colorPicker = getColorPicker();
colorPicker.addEventListener("input", function() { // Add event listerner on color Picker
    return colorPicker.value;
})
