import React, { useState, useEffect } from 'react';
import './bot.scss';

// 定義一個名為 ChatWindow 的 React 函數組件，並接受一個 token 作為參數
const ChatWindow = ({ token }) => {
    // 使用 useState Hook 來管理聊天窗口是否開啟的狀態
    const [isOpen, setIsOpen] = useState(false);

    // 定義一個函數，用於切換聊天窗口的開啟和關閉狀態
    const toggleChatWindow = () => {
        setIsOpen(!isOpen);
    };

    // 使用 useEffect Hook 來監聽 isOpen 和 token 的變化
    useEffect(() => {
        if (isOpen) {
            // 如果聊天窗口開啟，動態加載 Web Chat 的腳本
            const script = document.createElement('script');
            script.src = 'https://cdn.botframework.com/botframework-webchat/latest/webchat.js';
            script.async = true;
            script.onload = () => {
                // 當腳本加載完成後，創建一個 Web Chat 的 store
                const store = window.WebChat.createStore({}, ({ dispatch }) => next => action => {
                    // 攔截 DIRECT_LINE/INCOMING_ACTIVITY 行動，並將活動儲存在 sessionStorage 中
                    if (action.type === 'DIRECT_LINE/INCOMING_ACTIVITY') {
                        const activities = JSON.parse(sessionStorage.getItem('chatActivities')) || [];
                        activities.push(action.payload.activity);
                        sessionStorage.setItem('chatActivities', JSON.stringify(activities));
                    }
                    return next(action);
                });

                // 使用 Web Chat 渲染聊天窗口
                window.WebChat.renderWebChat({
                    directLine: window.WebChat.createDirectLine({ token: 'vbDMrXBgEnI.gzigo-wOOnFG4Gv7kgaN45F-SlBVcJ3YQt1xZ3vZzC4' }),
                    styleOptions: {
                        bubbleBackground: '#f0f0f0', // 設置聊天泡泡的背景色
                        bubbleBorderRadius: 20, // 設置系統聊天泡泡的圓角弧度，單位為像素
                        bubbleFromUserBackground: '#0078d7', // 設置用戶聊天泡泡的背景色
                        bubbleFromUserTextColor: 'White', // 設置用戶聊天泡泡的文字顏色
                        bubbleFromUserBorderRadius: 20, // 設置用戶聊天泡泡的圓角弧度，單位為像素
                    },
                    store
                }, document.getElementById('webchat'));

                // 加載之前的聊天活動
                const activities = JSON.parse(sessionStorage.getItem('chatActivities')) || [];
                activities.forEach(activity => {
                    store.dispatch({
                        type: 'DIRECT_LINE/INCOMING_ACTIVITY',
                        payload: { activity }
                    });
                });
            };
            // 將腳本元素添加到文檔中
            document.body.appendChild(script);
        }
    }, [isOpen, token]);

    return (
        <div>
            {/* 渲染一個圖片按鈕，用於打開和關閉聊天窗口 */}
            <img
                style={{ width: '100px', height: '100px' }}
                src="..\src\assets\images\icons\custom2.png"
                className="chat-button"
                title="網站客服 <a href='https://zh.pngtree.com/freepng/green-little-brother-boy-customer-service_4533556.html'>png 圖片來源於 zh.pngtree.com/</a>"
                onClick={toggleChatWindow}
                alt="Chat Button"
            />
            {/* 如果聊天窗口是開啟的，則渲染聊天窗口 */}
            {isOpen && (
                <div id="chatWindow" className="chat-window">
                    <div id="webchat" role="main"></div>
                </div>
            )}
        </div>
    );
};

export default ChatWindow;
