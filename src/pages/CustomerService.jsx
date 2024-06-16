import React, { useState, useEffect } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { Container, ListGroup, Button, Form } from 'react-bootstrap';
import './CustomerService.scss';

const CustomerService = () => {
    // 初始化狀態變數
    const [messages, setMessages] = useState([]);
    const [connection, setConnection] = useState(null);
    const [reply, setReply] = useState('');
    const [chatRooms, setChatRooms] = useState([]);
    const [currentChatRoom, setCurrentChatRoom] = useState('');
    const [connectionStarted, setConnectionStarted] = useState(false);

    // 建立SignalR連線
    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl("https://localhost:7090/chat")
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    // 啟動SignalR連線並設置事件監聽器
    useEffect(() => {
        if (connection) {
            connection.start()
                .then(async () => {
                    console.log('Connected to chat hub');
                    setConnectionStarted(true);

                    // 獲取活躍的聊天室列表
                    try {
                        const rooms = await connection.invoke('GetActiveChatRooms');
                        setChatRooms(rooms);
                    } catch (err) {
                        console.error('Failed to get chat rooms: ', err);
                    }

                    // 設置接收訊息的處理函數
                    connection.on('ReceiveSpecificMessage', (username, message) => {
                        setMessages(prevMessages => [...prevMessages, { username, message }]);
                    });

                    connection.on('ReceiveMessage', (username, message) => {
                        setMessages(prevMessages => [...prevMessages, { username, message }]);
                    });

                    connection.on('ReceiveChatHistory', (history) => {
                        setMessages(history.map(msg => ({ username: msg.username, message: msg.content })));
                    });

                    connection.on('NotifyNewMessage', (chatRoom, message) => {
                        setChatRooms(prevChatRooms => {
                            const updatedRooms = [...prevChatRooms];
                            if (!updatedRooms.some(room => room.chatRoom === chatRoom)) {
                                updatedRooms.push({ chatRoom, username: message.username });
                            }
                            return updatedRooms;
                        });
                    });
                })
                .catch(err => {
                    console.error('Connection failed: ', err);
                    setConnectionStarted(false);
                });

            // 處理重新連接事件
            connection.onreconnected(() => {
                if (currentChatRoom) {
                    handleJoinChatRoom(currentChatRoom);
                }
            });
        }
    }, [connection]);

    // 加入指定的聊天室
    const handleJoinChatRoom = async (chatRoom) => {
        try {
            // 如果已經在聊天室中，先離開當前聊天室
            if (currentChatRoom) {
                await connection.invoke('LeaveSpecificChatRoom', { username: '客服', chatRoom: currentChatRoom });
            }

            setCurrentChatRoom(chatRoom);
            setMessages([]);
            await connection.invoke('JoinSpecificChatRoom', { username: '客服', chatRoom });

            // 獲取聊天室歷史訊息
            const history = await connection.invoke('GetChatHistory', chatRoom);
            setMessages(history.map(msg => ({ username: msg.username, message: msg.content })));
        } catch (e) {
            console.error('Joining chat room failed: ', e);
        }
    };

    // 離開當前聊天室
    const handleLeaveChatRoom = async () => {
        try {
            if (currentChatRoom) {
                await connection.invoke('LeaveSpecificChatRoom', { username: '客服', chatRoom: currentChatRoom });
                setCurrentChatRoom('');
                setMessages([]);
            }
        } catch (e) {
            console.error('Leaving chat room failed: ', e);
        } finally {
            window.location.reload();
        }
    };

    // 回覆訊息
    const handleReply = async (e) => {
        e.preventDefault();
        if (connection && connectionStarted && currentChatRoom) {
            try {
                await connection.invoke('SendMessage', reply);
                setReply('');
            } catch (e) {
                console.error('Sending reply failed: ', e);
            }
        } else {
            alert('No connection to server yet.');
        }
    };

    return (
        <div className="service-chat-room">
            <Container>
                <h2>客服後台</h2>
                {!currentChatRoom && (
                    <ListGroup>
                        {chatRooms.map((room, index) => (
                            <ListGroup.Item key={index}>
                                <Button onClick={() => handleJoinChatRoom(room.chatRoom)}>
                                    {room.chatRoom} - {room.username}
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
                {currentChatRoom && (
                    <>
                        <h3>序號: {currentChatRoom}</h3>
                        <div className="message-container">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message-row ${msg.username === '客服' ? 'sent' : 'received'}`}>
                                    <div className="message-content">
                                        <div className="message-username">
                                            {msg.username}
                                        </div>
                                        {msg.message}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Form onSubmit={handleReply} className="send-message-form">
                            <Form.Group className="my-3">
                                <Form.Control
                                    type="text"
                                    value={reply}
                                    onChange={e => setReply(e.target.value)}
                                    placeholder="輸入訊息"
                                />
                            </Form.Group>
                            <Button type="submit" variant="primary" disabled={!reply.trim()}>傳送</Button>
                            <Button variant="secondary" onClick={handleLeaveChatRoom} className="leave-btn">離開</Button>
                        </Form>
                    </>
                )}
            </Container>
        </div>
    );
};

export default CustomerService;
