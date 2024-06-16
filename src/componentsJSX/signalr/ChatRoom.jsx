import React, { useState } from 'react';
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import './ChatRoom.scss';

const SendMessageForm = ({ sendMessage }) => {
    const [msg, setMessage] = useState('');

    return (
        <Form onSubmit={e => {
            e.preventDefault();
            sendMessage(msg);
            setMessage('');
        }} className="send-message-form">
            <InputGroup>
                <Form.Control
                    onChange={e => setMessage(e.target.value)}
                    value={msg}
                    placeholder="輸入您的訊息"
                />
                <Button variant="primary" type="submit" disabled={!msg}>傳送</Button>
            </InputGroup>
        </Form>
    );
};

const MessageContainer = ({ messages, currentUser }) => {
    return (
        <div className="message-container">
            {messages.map((msg, index) => (
                <div key={index} className={`message-row ${msg.username === currentUser ? 'sent' : 'received'}`}>
                    <div className="message-content">
                        {index === 0 || messages[index - 1].username !== msg.username ? (
                            <div className="message-username">
                                {msg.username}
                            </div>
                        ) : null}
                        {msg.msg}
                    </div>
                </div>
            ))}
        </div>
    );
};

const ChatRoom = ({ messages, sendMessage, currentUser, username }) => (
    <div className="chat-room">
        <Row className="px-1 py-1">
            <Col sm={10}>
                <h2>歡迎 {username}</h2>
            </Col>
            <Col>
                {/* Empty column for layout purposes */}
            </Col>
        </Row>
        <Row className="px-2 py-2">
            <Col sm={12}>
                <MessageContainer messages={messages} currentUser={currentUser} />
            </Col>
            <Col sm={12}>
                <SendMessageForm sendMessage={sendMessage} />
            </Col>
        </Row>
    </div>
);

export default ChatRoom;
