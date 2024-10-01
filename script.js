// Handle game logic here

function startGame() {
    const gameMessage = document.getElementById('game-message');
    gameMessage.innerText = 'Game Started!';
  
    // Example: Simple counter game logic
    let counter = 0;
    const button = document.querySelector('.button');
  
    button.innerText = 'Click to Score!';
    button.onclick = () => {
      counter++;
      gameMessage.innerText = `Your score: ${counter}`;
      if (counter === 10) {
        gameMessage.innerText = 'Congratulations! You won!';
        button.innerText = 'Restart';
        button.onclick = startGame;
      }
    };
  }
  