import React, { useEffect, useState } from "react";
import "./PromotionSection.scss";

const PromotionSection = () => {
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        // 加載活動資料的異步函數
        const loadPromotions = async () => {
            const url = 'https://localhost:7090/api/Activities'; // API 端點

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    const data = await response.json(); // 解析 JSON 數據
                    const formattedData = data.map(activity => ({
                        image: activity.albums[0] ? `data:image/jpeg;base64,${activity.albums[0]}` : "", // 假設活動有相冊圖片
                        title: activity.name,
                        description: activity.description,
                    }));
                    setPromotions(formattedData);
                } else {
                    console.error("Failed to fetch promotions:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching promotions:", error);
            }
        };

        loadPromotions();
    }, []);

    return (
        <section className="promotion-section">
            <h2 className="title">強檔活動</h2>
            <p className="subtitle">
                不要錯過我們最新的促銷活動，享受驚人的折扣和優惠！
            </p>

            <div className="cards-container">
                {promotions.map((promo, index) => (
                    <div key={index} className="card">
                        <img src={promo.image} alt={promo.title} className="image" />
                        <h3 className="card-title">{promo.title}</h3>
                        <p className="card-description">{promo.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PromotionSection;
