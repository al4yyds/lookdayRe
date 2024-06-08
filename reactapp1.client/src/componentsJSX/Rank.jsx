import React, { useEffect, useState } from 'react';
import './Rank.scss';

// 定義 Rank 組件
const Rank = () => {
    // 宣告狀態變數 ranklists、loading 和 error
    const [ranklists, setRanklists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 使用 useEffect 鉤子在組件掛載後執行副作用
    useEffect(() => {
        // 定義異步函數來獲取最熱門的活動
        const fetchTopBookedActivities = async () => {
            try {
                // 從指定的 API 獲取數據
                const response = await fetch('https://localhost:7090/api/activities/top-booked');
                if (!response.ok) {
                    // 如果響應不正常，拋出錯誤
                    throw new Error('Network response was not ok');
                }
                // 解析 JSON 數據
                const data = await response.json();
                console.log('API response data:', data);
                // 將數據分組
                const groupedData = groupDataByCity(data);
                console.log('Grouped data:', groupedData);
                // 更新狀態
                setRanklists(groupedData);
                setLoading(false);
            } catch (error) {
                // 處理錯誤
                console.error('Error fetching top booked activities:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        // 調用獲取數據的函數
        fetchTopBookedActivities();
    }, []); // 空依賴數組表示這個 effect 只會在組件掛載和卸載時執行一次

    // 定義函數來根據 City ID 將數據分組
    const groupDataByCity = (data) => {
        const grouped = data.reduce((acc, activity) => {
            const cityId = activity.cityId;
            const cityName = activity.cityName; // 假設返回數據中包含 cityName
            if (!acc[cityId]) {
                acc[cityId] = {
                    cityName: cityName,
                    activities: []
                };
            }
            acc[cityId].activities.push(activity);
            return acc;
        }, {});

        // 轉換分組結果並只取前三個分組
        return Object.values(grouped).slice(0, 3);
    };

    // 如果正在加載，顯示加載指示器
    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>
        );
    }

    // 如果出現錯誤，顯示錯誤信息和重試按鈕
    if (error) {
        return (
            <div className="error-container">
                <p>Error: {error}</p>
                <button onClick={() => window.location.reload()}>Try Again</button>
            </div>
        );
    }
    // 渲染排名列表
    return (
        <section className="sectionRank">
            <h2 className="rank-title">熱門排行榜</h2>

            <p className="rank-subtitle">探索我們最受歡迎的產品 !</p>
            <div className="product-rankings">
                {ranklists.length === 0 ? (
                    // 如果沒有數據，顯示提示信息
                    <p>No data available</p>
                ) : (
                    // 遍歷排名列表並渲染每個分組
                    ranklists.map((ranklist, index) => (
                        <div key={index} className="product-ranking">
                            <h2>Top {index + 1}: {ranklist.cityName}</h2>
                            <ul>
                                {ranklist.activities.slice(0, 3).map((product, productIndex) => (
                                    <li key={product.activityId} className="product-item">
                                        {product.albums && product.albums.length > 0 && (
                                            <div className="image-container">
                                                <img
                                                    src={`data:image/jpeg;base64,${product.albums[0]}`}
                                                    alt={product.name}
                                                    className="activity-image"
                                                />
                                                <span className="rank-overlay">No.{productIndex + 1}</span>
                                            </div>
                                        )}
                                        <span className="name">{product.name}<br />
                                            <span className="description">{product.description}</span>
                                        </span>
                                        {/* <span className="booking-count">{product.bookingCount} bookings</span> */}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                )}
            </div>
        </section>

    );
};

// 匯出 Rank 組件
export default Rank;
