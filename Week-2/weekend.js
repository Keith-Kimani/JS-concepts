let player1Score = 0;
let player2Score = 0;

function playRound(player1Choice) {
    const choices = ['rock', 'paper', 'scissors'];
    const player2Choice = choices[Math.floor(Math.random() * choices.length)];

    const result = determineWinner(player1Choice, player2Choice);

    if (result === 'Player 1 wins') {
        player1Score++;
    } else if (result === 'Player 2 wins') {
        player2Score++;
    }

    updateScore();
}

function determineWinner(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
        return 'It\'s a tie!';
    }

    if (
        (player1Choice === 'rock' && player2Choice === 'scissors') ||
        (player1Choice === 'paper' && player2Choice === 'rock') ||
        (player1Choice === 'scissors' && player2Choice === 'paper')
    ) {
        return 'Player 1 wins';
    } else {
        return 'Player 2 wins';
    }
}

function updateScore() {
    document.getElementById('score').innerText = `Player 1: ${player1Score} | Player 2: ${player2Score}`;
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    updateScore();
}
