import React, { useState } from "react";
import { Button, Row, Col, Form, Alert } from "react-bootstrap";

const WaitingRoom = ({ joinChatRoom }) => {
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username) {
            setError("Username is required.");
            return;
        }
        setError("");
        joinChatRoom(username);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="px-5 py-5">
                <Col sm={12}>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form.Group className="mb-3">
                        <Form.Label>請輸入姓名:</Form.Label>
                        <Form.Control
                            placeholder="Username"
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                        />
                    </Form.Group>
                </Col>
                <Col sm={12}>
                    <hr />
                    <Button variant="success" type="submit">Join</Button>
                </Col>
            </Row>
        </Form>
    );
};

export default WaitingRoom;
