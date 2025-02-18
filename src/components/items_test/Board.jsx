import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const Board = ({ xIsNext, squares, onPlay}) => {
  //const [squares, setSquares] = useState(Array(9).fill(null));
  //const [xIsNext, setXIsNext] = useState(true);
  const [hidden, setHidden] = useState(true);
  const [winner, setWinner] = useState(false);

  let letra = xIsNext ? "X" : "O";

  useEffect(() => {
    const response = calculateWinner(squares);
    if (response) {
      console.log("Ganador_w:", winner);
      setHidden(false);
      setWinner(true);
    }
  }, [squares]);

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    let nextValue = xIsNext ? "X" : "O";
    const nextSquares = [...squares];
    nextSquares[i] = nextValue;
    //setSquares(nextSquares);
    onPlay(nextSquares);
   

    console.log("array", squares);
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
      <h1>Juego Marca con losx</h1>

   {/*    <button
        onClick={() => {
          setSquares(Array(9).fill(null));
          setXIsNext(true);
          setHidden(true);
          setWinner(false);
        }}
      >
        iniciar Juego
      </button> */}

      <h1 className={hidden ? "hidden" : ""}>
        gano la letra {!xIsNext ? "X" : "O"}{" "}
      </h1>

      <h1 className={!hidden ? "hidden" : ""}>Turno de {letra}</h1>
      <Row>
        <Col>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </Col>
      </Row>
    </>
  );
};

export default Board;
