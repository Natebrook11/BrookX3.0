import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, ListGroup, Button, Modal } from 'react-bootstrap';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        const todosFromStorage = localStorage.getItem('todos');
        const completedTodosFromStorage = localStorage.getItem('completedTodos');
        if (todosFromStorage) {
            setTodos(JSON.parse(todosFromStorage));
        }
        if (completedTodosFromStorage) {
            setCompletedTodos(JSON.parse(completedTodosFromStorage));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
    }, [todos, completedTodos]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex === null) {
            setTodos([...todos, inputValue]);
        } else {
            const newTodos = [...todos];
            newTodos[editIndex] = inputValue;
            setTodos(newTodos);
            setEditIndex(null);
        }
        setInputValue('');
        setShowEditModal(false);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setInputValue(todos[index]);
        setShowEditModal(true);
    };

    const handleComplete = (index) => {
        const newTodos = [...todos];
        const newCompletedTodos = [...completedTodos, newTodos[index]];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        setCompletedTodos(newCompletedTodos);
    };

    const handleDelete = (index) => {
        const newCompletedTodos = [...completedTodos];
        newCompletedTodos.splice(index, 1);
        setCompletedTodos(newCompletedTodos);
    };
    const EditModal = ({ show, handleSubmit, inputValue, setInputValue }) => (
        <Modal show={show} onHide={() => setShowEditModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit To-Do</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Control
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );

    return (
        <Container>
            <Row className="justify-content-md-center mt-3">
                <Col md="6">
                    <h1 className="text-center">To-Do List</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Add a new to-do"
                        />
                    </Form>
                    <ListGroup className="mt-3">
                        {todos.map((todo, index) => (
                            <ListGroup.Item key={index}>
                                {todo}
                                <Button
                                    className="float-right"
                                    variant="success"
                                    size="sm"
                                    onClick={() => handleComplete(index)}
                                >
                                    Complete
                                </Button>
                                <Button
                                    className="float-right mr-2"
                                    variant="warning"
                                    size="sm"
                                    onClick={() => handleEdit(index)}
                                >
                                    Edit
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <h2 className="mt-3">Completed</h2>
                    <ListGroup>
                        {completedTodos.map((todo, index) => (
                            <ListGroup.Item key={index}>
                                {todo}
                                <Button
                                    className="float-right"
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(index)}
                                >
                                    Delete
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
            <EditModal
                show={showEditModal}
                handleSubmit={handleSubmit}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
        </Container>
    );
}

export default App;