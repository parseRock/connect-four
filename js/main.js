/*----- constants -----*/
const COLOR = {
    '0': 'white',
    '1': 'red',
    '-1': 'yellow'
};



/*----- app's state (variables) -----*/
// Array of 42 elements...
// null -> sq avail; 1 or -1 for the players 
let board;
let turn; // 1 or -1; 0 for empty space
let gameStatus; // null -> game in play; 1/-1 player win; 'T' -> tie
let winner; // 


/*----- cached element references -----*/
const markerEls = [document.querySelectorAll('#markers > div')] ;




/*----- event listeners -----*/
document.getElementById('markers').addEventListener('click', handleDrop() {

}); 




/*----- functions -----*/
function init() {
    board = [
        [0, 0, 0, 0, 0, 0, 0,], //column 0
        [0, 0, 0, 0, 0, 0, 0,], //column 1
        [0, 0, 0, 0, 0, 0, 0,], //column 2
        [0, 0, 0, 0, 0, 0, 0,], //column 3
        [0, 0, 0, 0, 0, 0, 0,], //column 4
        [0, 0, 0, 0, 0, 0, 0,], //column 5
        [0, 0, 0, 0, 0, 0, 0,], //column 6
    ];
    turn = 1;
    render();
}

function render() {
    // Iterate over the column arrays
    board.forEach(function(colArr, colIdx) {
        colArr.forEach(function(cellVal, rowIdx) {
            const cellEl = document.getElementById(`c${colIdx}r${rowIdx}`);
            cellEl.style.backgroundColor = COLORS[cellVal];
        });
    });
}

// update all impacted state, then call render
function handleDrop(evt) {
    const colIdx = markerEls.indexOf(evt.target)
    if (colIdx === -1) return;
    const colArr = board[colIdx];
    if (!colArr.includes(0)) return;
    const rowIdx = colArr.indexOf(0);
    colArr[rowIdx] = turn;
    turn *= -1;
    render();
}