import React, { useState, useEffect } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import WaitingRoom from './WaitingRoom';
import ChatRoom from './ChatRoom';

function App() {
    // 設定狀態變數
    const [conn, setConnection] = useState(null);
    const [messages, setMessages] = useState([]);
    const [currentUser, setCurrentUser] = useState('');

    // 加入聊天室
    const joinChatRoom = async (username) => {
        try {
            setCurrentUser(username);
            // 建立SignalR連線
            const connection = new HubConnectionBuilder()
                .withUrl("https://localhost:7090/chat")
                .configureLogging(LogLevel.Information)
                .build();

            // 設置訊息接收事件
            connection.on("ReceiveMessage", (username, msg) => {
                console.log("msg: ", msg);
            });

            connection.on("ReceiveSpecificMessage", (username, msg) => {
                setMessages(messages => [...messages, { username, msg }]);
            });

            connection.on("ReceiveChatHistory", (history) => {
                setMessages(history);
            });

            connection.on("NotifyNewMessage", (chatRoom, message) => {
                console.log(`New message in chat room ${chatRoom}: ${message}`);
            });

            // 啟動連線
            await connection.start().catch(err => console.error("Error starting connection:", err));

            const chatroom = '';
            // 加入指定的聊天室
            await connection.invoke("JoinSpecificChatRoom", { username, chatroom }).catch(err => console.error("Error invoking method:", err));

            setConnection(connection);
        } catch (e) {
            console.error(e);
        }
    };

    // 發送訊息
    const sendMessage = async (message) => {
        try {
            await conn.invoke("SendMessage", message).catch(err => console.error("Error sending message:", err));
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <main>
                <Container>
                    {
                        // 判斷是否已連線，顯示等待室或聊天室
                        !conn
                            ? <WaitingRoom joinChatRoom={joinChatRoom} />
                            : <ChatRoom messages={messages} sendMessage={sendMessage} currentUser={currentUser} username={currentUser} />
                    }
                </Container>
            </main>
        </div>
    );
}

export default App;
