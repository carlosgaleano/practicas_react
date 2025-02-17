import { useState, useEffect } from "react";

const Game_x = () => {
  const [squeares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [hidden, setHidden] = useState(true);
  const [winner, setWinner] = useState(false);

  let letra = xIsNext ? "X" : "O";

  useEffect(() => {
    const response = calculateWinner(squeares);
    if (response) {
      console.log("Ganador_w:", winner);
      setHidden(false);
      setWinner(true);
    }
  }, [squeares]);

  const handleClick = (i) => {
    if (squeares[i] || winner) {
      return;
    }
    let nextValue = xIsNext ? "X" : "O";
    const nextSquares = [...squeares];
    nextSquares[i] = nextValue;
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

    console.log("array", squeares);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        
        return squares[a];
      }
    }
    return null;
  };

  const Square = ({ value, onSquareClick }) => {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  };

  return (
    <>
      <h1>Game_x</h1>

      <button
        onClick={() => {
          setSquares(Array(9).fill(null));
          setXIsNext(true);
          setHidden(true);
          setWinner(false);
        }}
      >
        iniciar Juego
      </button>

      <h1 className={hidden ? "hidden" : ""}>
        gano la letra {!xIsNext ? "X" : "O"}{" "}
      </h1>

      <h1 className={!hidden ? "hidden" : ""}>Turno de {letra}</h1>
      <div className="board-row">
        <Square value={squeares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squeares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squeares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squeares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squeares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squeares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squeares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squeares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squeares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Game_x;
