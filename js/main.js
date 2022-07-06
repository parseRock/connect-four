/*----- constants -----*/
const COLORS = {
    '0': 'white',
    '1': 'red',
    '-1': 'yellow',
};



/*----- app's state (variables) -----*/

let board;
let turn; 
let winner; 



/*----- cached element references -----*/
const markerEls = [...document.querySelectorAll('#markers > div')] ;




/*----- event listeners -----*/
document.getElementById('markers').addEventListener('click', handleDrop); 




/*----- functions -----*/
init()


function init() {
    board = [
        [1, -1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0], 
    ];
    turn = 1;
    render();
};



function render() {
    board.forEach(function(colArr, colIdx) {
        colArr.forEach(function(cellVal, rowIdx) {
            const cellEl = document.getElementById(`c${colIdx}r${rowIdx}`);
            cellEl.style.backgroundColor = COLORS[cellVal];
        });
    });
}
    
function handleDrop(evt) {
    const colIdx = markerEls.indexOf(evt.target);
    console.log(colIdx)
    if (colIdx === -1) return;
    const colArr = board[colIdx];
    if (!colArr.includes(0)) return;
    const rowIdx = colArr.indexOf(0);
    colArr[rowIdx] = turn;
    turn *= -1;
    render();
}

// function checkWin(colIdx, rowIdx) {
//     const player = board[colIdx][rowIdx];
//     let count = 1;
//     let idx = colIdx + 1;
//     while (idx < board.length && board[idx][rowIdx] === player) {
//         count++;
//         idx++;
//     }
//     return count >= 2 ? winner = true : null
    // return checkVertWin(colIdx, player) || checkHorzWin(colIdx, rowIdx, player) .... etc
//   }