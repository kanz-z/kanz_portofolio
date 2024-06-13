document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const status = document.getElementById('status');
    const restartButton = document.getElementById('restartButton');
    let currentPlayer = 'O';
    let board = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
  
    const checkWin = () => {
      const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
  
      for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }
  
      return null;
    };
  
    const checkDraw = () => {
      return board.every(cell => cell !== '');
    };
  
    const handleCellClick = (e) => {
      const cell = e.target;
      const index = parseInt(cell.getAttribute('data-cell'));
  
      if (board[index] !== '' || !gameActive) {
        return;
      }
  
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;
      cell.classList.add(currentPlayer);
  
      const winner = checkWin();
      if (winner) {
        status.textContent = `Player ${winner} Menang!`;
        gameActive = false;
        return;
      }
  
      if (checkDraw()) {
        status.textContent = 'Permainan Seri!';
        gameActive = false;
        return;
      }
  
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      status.textContent = `Giliran Player ${currentPlayer}`;
    };
  
    const restartGame = () => {
        currentPlayer = 'O';
        board = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        status.textContent = `Giliran Player ${currentPlayer}`;
        cells.forEach(cell => {
          cell.textContent = '';
          cell.classList.remove('X', 'O');
        });
      };
      
  
    cells.forEach(cell => {
      cell.addEventListener('click', handleCellClick);
    });
  
    restartButton.addEventListener('click', restartGame);
  });

  const handleCellClick = (e) => {
    const cell = e.target;
    const index = parseInt(cell.getAttribute('data-cell'));
  
    if (board[index] !== '' || !gameActive) {
      return;
    }
  
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
  
    // Menghapus kelas yang sudah ada sebelumnya
    cell.classList.remove('X', 'O');
    
    // Menambahkan kelas sesuai dengan simbol yang diletakkan
    cell.classList.add(currentPlayer);
  
    const winner = checkWin();
    if (winner) {
      status.textContent = `Player ${winner} Menang!`;
      gameActive = false;
      return;
    }
  
    if (checkDraw()) {
      status.textContent = 'Permainan Seri!';
      gameActive = false;
      return;
    }
  
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    status.textContent = `Giliran Player ${currentPlayer}`;
  };
  