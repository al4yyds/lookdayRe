    import React, { useState, useEffect } from 'react';
    import { useParams } from 'react-router-dom';

    const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
        try {
            const response = await fetch(`https://localhost:7148/api/Activities/${id}`);
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProduct(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-page">
        <div className="product-header">
            <h1 className="product-title">{product.title}</h1>
            <img src={`data:image/png;base64,${product.photo[0]}`} alt={product.name} />
        </div>
        <div className="product-info">
            <div className="product-price">{product.price}</div>
            <div className="product-date">日期：{product.date}</div>
            <div className="product-duration">時間：{product.time}</div>
            <div className="product-location">地點：{product.location}</div>
            <div className="product-description">
            <h2>活動詳情</h2>
            <p>{product.description}</p>
            </div>
        </div>
        <div className="product-footer">
            <button className="book-now-button">立即預訂</button>
            <div className="share-buttons">
            {/* 在这里放置分享按钮 */}
            </div>
        </div>
        </div>
    );
    };

    export default ProductPage;
