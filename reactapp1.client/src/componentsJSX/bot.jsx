import React, { useState, useEffect } from 'react';

const ChatWindow = ({ token }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatWindow = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            const script = document.createElement('script');
            script.src = 'https://cdn.botframework.com/botframework-webchat/latest/webchat.js';
            script.async = true;
            script.onload = () => {
                window.WebChat.renderWebChat({
                    directLine: window.WebChat.createDirectLine({ token: 'vbDMrXBgEnI.gzigo-wOOnFG4Gv7kgaN45F-SlBVcJ3YQt1xZ3vZzC4' }),
                    styleOptions: {
                        bubbleBackground: '#f0f0f0',
                        bubbleFromUserBackground: '#0078d7',
                        bubbleFromUserTextColor: 'White'
                    }
                }, document.getElementById('webchat'));
            };
            document.body.appendChild(script);
        }
    }, [isOpen, token]);

    return (
        <div>
            <img
                style={{ width: '50px', height: '50px' }}
                src="..\src\assets\images\icons\custom.png"
                className="chat-button"
                title="網站客服"
                onClick={toggleChatWindow}
                alt="Chat Button"
            />
            {isOpen && (
                <div id="chatWindow" className="chat-window">
                    <div id="webchat" role="main"></div>
                </div>
            )}
            <style jsx>{`
                .chat-button {
                    position: fixed;
                    right: 20px;
                    bottom: 20px;
                    cursor: pointer;
                }

                .chat-window {
                    position: fixed;
                    right: 20px;
                    bottom: 80px;
                    width: 300px;
                    height: 400px;
                    background-color: white;
                    border: 1px solid #ccc;
                    display: block;
                    z-index: 1000;
                    overflow: auto;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </div>
    );
};

export default ChatWindow;
