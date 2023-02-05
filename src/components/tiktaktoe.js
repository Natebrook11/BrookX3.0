import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

function TikTakToe() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);
    const [xWins, setXWins] = useState(0);
    const [oWins, setOWins] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const handleClick = (index) => {
        if (winner) {
            return;
        }
        const newSquares = [...squares];
        if (newSquares[index]) {
            return;
        }
        newSquares[index] = isXNext ? "X" : "O";
        setSquares(newSquares);
        setIsXNext(!isXNext);
        checkForWinner(newSquares);
    };

    const checkForWinner = (squares) => {
        const winningLines = [[0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ];
        for (let i = 0; i < winningLines.length; i++) {
            const [a, b, c] = winningLines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setWinner(squares[a]);
                setShowModal(true);
                break;
            }
            if (winner === "X") {
                setXWins(xWins + 1);
            } else if (winner === "O") {
                setOWins(oWins + 1);
            }
            resetGame();
        }
    };

    const renderSquare = (index) => {
        return (
            <Col xs={4} key={index} className="p-3 border">
                <Button
                    onClick={() => handleClick(index)}
                    variant="outline-primary"
                    block
                >
                    {squares[index]}
                </Button>
            </Col>
        );
    };

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
        setShowModal(false);
    };
    const renderBoard = () => {
        let board = [];
        for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                row.push(renderSquare(i * 3 + j));
            }
            board.push(<Row key={i}>{row}</Row>);
        }
        return board;
    };
    return (
        <Container className="mt-5">
            <Row className="mb-3">
                <Col xs={12} className="text-center">
                    <h1>Tic Tac Toe</h1>
                </Col>
            </Row>
            <Row>{renderBoard()}</Row>
            <Button className='reset-btn' onClick={resetGame} variant="danger">
                        Reset
            </Button>
            <Modal show={showModal} >
                <Modal.Header closeButton>
                    <Modal.Title>{winner ? winner +  ' wins!' : ""}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>X wins: {xWins}</p>
                    <p>O wins: {oWins}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default TikTakToe;
