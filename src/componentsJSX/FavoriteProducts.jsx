import React, { useState, useEffect } from 'react';
import './FavoriteProducts.scss';

const FavoriteProducts = () => {
  const [products, setProducts] = useState([]);
  const userId = 2; // 替换为实际的用户ID

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const response = await fetch(`https://localhost:7148/api/Favorites/favorites?userId=${userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching favorite products:', error);
      }
    };
    fetchFavoriteProducts();
  }, [userId]);

  const handleDelete = async (bookingId) => {
    if (window.confirm('確定要刪除此收藏嗎？')) {
      try {
        console.log('Sending DELETE request...');
        const response = await fetch(`https://localhost:7148/api/Favorites/${bookingId}?userId=${userId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('DELETE request successful');
        // 刪除成功後更新本地狀態
        setProducts(products.filter(product => product.bookingId !== bookingId));
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  return (
    <div className="favorite-products">
      <header className="header">
        <h1>我的收藏</h1>
        <p>探索您最喜愛的商品，享受購物的樂趣</p>
      </header>
      <div className="product-list">
        {products.map(product => (
          <div key={product.bookingId} className="product-card">
            {/* 假设 Image 属性存在 */}
            <img src={`data:image/png;base64,${product.image}`} alt={product.title} />
            <div className="product-info">
              <h2>{product.title}</h2>
              <p>活動詳情: {product.desc}</p>
              <p className="price">NT$ {product.price}</p>
              <button onClick={() => handleDelete(product.bookingId)}>刪除</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteProducts;
