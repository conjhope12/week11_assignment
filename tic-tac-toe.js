const tiles = document.body.querySelectorAll(".tile");
const playerX = "X";
const playerO = "O";
let turn = playerX;

const boardState = Array(tiles.length)
boardState.fill(null);

//Elements
const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById("game-over-text");
const playAgain = document.getElementById("play-again");
playAgain.addEventListener("click", startNewGame);

tiles.forEach((tile) => tile.addEventListener("click", tileClick));

function hoverText (){
    //remove all hover text
    tiles.forEach((tile) => {
        tile.classList.remove("x-hover");
        tile.classList.remove("o-hover");
    });

    const hoverClass = `${turn.toLowerCase()}-hover`;

    tiles.forEach((tile) => {
        if (tile.innerText === "") {
            tile.classList.add(hoverClass);
        }
    });
}

hoverText();

function tileClick (event) {
    if(gameOverArea.classList.contains("visible")) {
        return;
    }

    const tile = event.target;
    const tileNumber = tile.dataset.index;
    if (tile.innerText != "") {
        return;
    }

    if (turn === playerX) {
        tile.innerText = playerX;
        boardState[tileNumber - 1] = playerX;
        turn = playerO;
    } 
    else {
        tile.innerText = playerO;
        boardState[tileNumber - 1] = playerO;
        turn = playerX
    }

    hoverText();
    checkWinner();
}

function checkWinner() {
    //Winner check
    for (const wCombo of winCombos) {
        //Object desctructuring 
        const {combo, strikeClass} = wCombo;
        const tileVal1= boardState[combo[0] - 1];
        const tileVal2= boardState[combo[1] - 1];
        const tileVal3= boardState[combo[2] - 1];

        if (
            tileVal1 != null && 
            tileVal1 === tileVal2 && 
            tileVal1 === tileVal3
            ) {
            strike.classList.add(strikeClass);
            gameOverScreen(tileVal1);
            return;
        }
    }

    //draw check
    const allTileFilledIn = boardState.every((tile) => tile != null);
    if (allTileFilledIn) {
        gameOverScreen(null);
    }
}

function gameOverScreen(winnerText) {
    let text = "Draw :/";
    if (winnerText != null) {
        text = `Winner is ${winnerText}!`
    }
    gameOverArea.className = "visible";
    gameOverText.innerText = text;
}

function startNewGame() {
    strike.className = "strike";
    gameOverArea.className = "hidden";
    boardState.fill(null);
    tiles.forEach((tile) => (tile.innerText = ""));
    turn = playerX;
    hoverText();
}
const winCombos = [
    //rows
    {combo: [1,2,3], strikeClass: "strike-row-1"},
    {combo: [4,5,6], strikeClass: "strike-row-2"},
    {combo: [7,8,9], strikeClass: "strike-row-3"},
    //col
    {combo: [1,4,7,], strikeClass: "strike-column-1"},
    {combo: [2,5,8,], strikeClass: "strike-column-2"},
    {combo: [3,6,9,], strikeClass: "strike-column-3"},
    //dia
    {combo: [1,5,9], strikeClass: "strike-diagonal-1"},
    {combo: [3,5,7], strikeClass: "strike-diagonal-2"},
];

// let playerX = $('xBtn');
// let playerO = $('oBtn');

// let playerTurn = $('btn_turn');
// let playerStart= $('btn_start');

// let gameTable = $('tttTable');

// // $('xWin').epmty()


// const boxSelectionX = (idOfSelectionX) => {

// }

// const boxSelectionO = (idOfSelectionO) => {

// }

// let xWins = $('xWin');
// let oWins = $('oWin');
// let draw = $('drawGame');

// const endGameBtn = (idOfAlert) => {
//     if (playerX === ['1,2,3'] || ['4,5,6'] || ['7,8,9'] || ['1,4,7'] || ['2,5,8'] || ['3,6,9'] || ['1,5,9'] || ['3,5,7']) {
//         $(idOfAlert).text('gameOver')
//         xWins.text('xWin')
//     } else if (playerO === ['1,2,3'] || ['4,5,6'] || ['7,8,9'] || ['1,4,7'] || ['2,5,8'] || ['3,6,9'] || ['1,5,9'] || ['3,5,7']) {
//         $(idOfAlert).text('gameOver');
//         oWins.text('oWin');
//     } else {
//         $(idOfAlert).text('gameOver');
//         draw.text('drawGame');
//     }
// }

// const clearBoardBtn = (clearBoard) => {
//     $(clearBoard).remove();
//     $('tttTable').value='';
//}

// const winBox = $('#winnerBox')
// winBox.text('x')



//event listener that will add an X to the grid
// document.getElementById("tttTable").addEventListener('click', (e) => {
    //put in either an X or an O
    // e.target.innerHTML = currentPlayer
    //switch players
    
    //continue process until win/lose/draw
    //check for a winner


// })

// const turnBox = $('#turnBox')
// turnBox.text('x')

/**
 * things we need:
 * the grid, when we click on grid... (click event listener)
 *   put the currentPlayer in the box
 *   check for a win/draw
 *   draw: all the boxes are full OR.... 9 turns
 * 
  variables:
  currentPlayer = "x" or "o"
  turns: = 0


 * event listener: click on the grid - 
  click on the clear board button
 * 
 * button to clear the board



 */
