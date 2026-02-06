import { useState } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import './App.css';

function App() {
  // Stan gry - obiekt Chess z biblioteki chess.js
  const [game, setGame] = useState(new Chess());

  // Funkcja wywoływana, gdy upuścisz figurę na pole
  function onDrop(sourceSquare: string, targetSquare: string) {
    try {
      // Kopiujemy stan gry (React tego wymaga - immutability)
      const gameCopy = new Chess(game.fen());
      
      // Próbujemy wykonać ruch
      const move = gameCopy.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q', // zawsze promuj na hetmana dla uproszczenia
      });

      // Jeśli ruch jest nielegalny, move będzie null
      if (move === null) return false;

      // Aktualizujemy stan
      setGame(gameCopy);
      return true;
    } catch (error) {
      return false;
    }
  }

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: '#302e2b' 
    }}>
      <div style={{ width: '400px', height: '400px' }}>
        <Chessboard position={game.fen()} onPieceDrop={onDrop} />
      </div>
    </div>
  );
}

export default App;