import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import GridPic from '../componentsJSX/GridPic'; // 导入GridPic组件
import Reviews from '../componentsJSX/Reviews'; // 导入Reviews组件
import ProductDesc from '../componentsJSX/ProductDesc'; // 导入Description组件
import ProductHeader from '../componentsJSX/ProductHeader'; // 导入ProductHeader组件
import './ProductPage.scss';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [averageRating, setAverageRating] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://localhost:7148/api/ActivitiesAPI/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);

        // Calculate average rating
        if (data.reviews && data.reviews.length > 0) {
          const totalRating = data.reviews.reduce((acc, review) => acc + review.rating, 0);
          const avgRating = totalRating / data.reviews.length;
          setAverageRating(avgRating.toFixed(2)); // 保留兩位小數
        }

      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // 格式化日期為西元年、月、日
  const formattedDate = format(new Date(product.date), 'yyyy年MM月dd日');

  // 将 base64 字符串添加 data:image/png;base64, 前缀
  const productImages = product.photo.map(photo => `data:image/png;base64,${photo}`);

  const toggleFavorite = async () => {
    try {
      const userId = 2; // 替換為實際用戶ID
      const method = isFavorite ? 'DELETE' : 'POST';
      const response = await fetch(`https://localhost:7148/api/Bookings`, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          UserID: userId,
          ActivityID: id, //有抓到活動id
          BookingDate: new Date().toISOString(),
          Price: product.price,
          BookingStatesID: isFavorite ? 1 : 2, // 1: 取消收藏, 2: 收藏
        }),
      });

      if (response.ok) {
        setIsFavorite(!isFavorite);
      } else {
        throw new Error('Failed to update favorite status');
      }
    } catch (error) {
      console.error('Error updating favorite status:', error);
    }
  };

  return (
    <div className="product-page">
      <ProductHeader 
        title={product.name}
        averageRating={averageRating}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />

      {product.photo && product.photo.length > 0 && (
        <GridPic images={productImages} /> // 使用GridPic组件并传递图片数据
      )}

      {/* 使用Description组件并传递描述数据 */}
      <ProductDesc
        price={product.price}
        date={formattedDate}
        remaining={product.remaining}
        description={product.description}
      />

      {/* 使用Reviews组件并传递评论数据 */}
      <Reviews reviews={product.reviews} />

      <div className="product-footer">
        <button className="book-now-button">立即預訂</button>
        <button className="add-to-cart-button">加入購物車</button>
        <div className="share-buttons">
          {/* 在這裡放置分享按鈕 */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
