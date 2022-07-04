/*----- constants -----*/




/*----- app's state (variables) -----*/
// Array of 42 elements...
// null -> sq avail; 1 or -1 for the players 
let board;
let turn; // 1 or -1; 0 for empty space
let gameStatus; // null -> game in play; 1/-1 player win; 'T' -> tie



/*----- cached element references -----*/





/*----- event listeners -----*/





/*----- functions -----*/
Infinity();


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
    board.forEach(function() {

    });
}