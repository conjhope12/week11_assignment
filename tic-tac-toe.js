let playerX = $('xBtn');
let playerO = $('oBtn');

let playerTurn = $('btn_turn');
let playerStart= $('btn_start');

let gameTable = $('tttTable');

// $('xWin').epmty()

const startGameBtn = () => {

}

const boxSelectionX = (idOfSelectionX) => {
    
}

const boxSelectionO = (idOfSelectionO) => {

}

const endTurnBtn = () => {
    
}

let xWins = $('xWin');
let oWins = $('oWin');
let draw = $('drawGame');

const endGameBtn = (idOfAlert) => {
    if (playerX === ['1,2,3'] || ['4,5,6'] || ['7,8,9'] || ['1,4,7'] || ['2,5,8'] || ['3,6,9'] || ['1,5,9'] || ['3,5,7']) {
        $(idOfAlert).text('gameOver')
        xWins.text('xWin')
    } else if (playerO === ['1,2,3'] || ['4,5,6'] || ['7,8,9'] || ['1,4,7'] || ['2,5,8'] || ['3,6,9'] || ['1,5,9'] || ['3,5,7']) {
        $(idOfAlert).text('gameOver');
        oWins.text('oWin');
    } else {
        $(idOfAlert).text('gameOver');
        draw.text('drawGame');
    }
}

const clearBoardBtn = (clearBoard) => {
    $(clearBoard).remove();
    $('tttTable').value='';
}

