var moves = [null, null, null, null, null, null, null, null, null];
var player = 1; 
var XScore = 0;
var OScore = 0;
var round = 0;
var isWin = false;

var wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6] 
];

document.getElementById("round").innerText = 1;
document.getElementById("XScore").innerText = 0;
document.getElementById("OScore").innerText = 0;

function move(event) {
    var id = event.target.id;

    document.getElementById("XS").style.color = "white";
    document.getElementById("OS").style.color = "white";

    if (id && isWin === false) {
        if (player === 1 && !moves[id]) {
            moves[id] = 'X';
            document.getElementById(id).innerHTML = 'X';
            document.getElementById("XS").style.color = "blue";
            player = 2;
            checkWin();
            return;
        }
        if (player === 2 && !moves[id]) {
            moves[id] = 'O';
            document.getElementById(id).innerHTML = 'O';
            document.getElementById("OS").style.color = "yellow";
            player = 1;
            checkWin();
            return;
        }
    }
}

function checkWin() {
    wins.forEach(function(win) {
        var index1 = win[0];
        var index2 = win[1];
        var index3 = win[2];
        if (player !== 1) {
            if (moves[index1] && moves[index1] === moves[index2] && moves[index1] && moves[index1] === moves[index3]) {
                XScore += 1;
                document.getElementById("XScore").innerText = XScore;
                isWin = true;
            }
        }
        if (player !== 2) {
            if (moves[index1] && moves[index1] === moves[index2] && moves[index1] && moves[index1] === moves[index3]) {
                OScore += 1;
                document.getElementById("OScore").innerText = OScore;
                isWin = true;
            }
        }
        playactive = false;
    });

}

function restart() {
    moves = [null,null,null,null,null,null,null,null,null];
    player = 1;
    round += 1;
    playactive = true;
    isWin = false;
    document.getElementById("round").innerText = round;
    var step;

    for (step = 0; step < 9; step++) {
        id = step;
        document.getElementById(id).innerHTML = '';
    }
}