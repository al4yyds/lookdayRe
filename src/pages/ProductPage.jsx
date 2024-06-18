// ProductPage.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import GridPic from "../componentsJSX/GridPic";
import Reviews from "../componentsJSX/Reviews";
import ProductDesc from "../componentsJSX/ProductDesc";
import ProductHeader from "../componentsJSX/ProductHeader";
import ImageDescription from "../componentsJSX/ImageDescription"; // 导入更新后的组件
import "./ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [averageRating, setAverageRating] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://localhost:7148/api/ActivitiesAPI/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);

        // Calculate average rating
        if (data.reviews && data.reviews.length > 0) {
          const totalRating = data.reviews.reduce(
            (acc, review) => acc + review.rating,
            0
          );
          const avgRating = totalRating / data.reviews.length;
          setAverageRating(avgRating.toFixed(2)); // 保留两位小数
        }

        // Fetch favorite status
        const userId = 2; // 替换为实际用户ID
        const favoriteResponse = await fetch(
          `https://localhost:7148/api/Bookings/favoriteStatus`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              UserID: userId,
              ActivityID: id,
            }),
          }
        );

        if (favoriteResponse.ok) {
          const favoriteData = await favoriteResponse.json();
          setIsFavorite(favoriteData.isFavorite);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // 格式化日期为西元年、月、日
  const formattedDate = format(new Date(product.date), "yyyy年MM月dd日");

  // 将 base64 字符串添加 data:image/png;base64, 前缀
  const productImages = product.photo.map((photo) => ({
    src: `data:image/png;base64,${photo}`,
    description: product.description,
  }));

  const toggleFavorite = async () => {
    try {
      const userId = 2; // 替换为实际用户ID
      if (isFavorite) {
        // 删除收藏
        const response = await fetch(
          `https://localhost:7148/api/Bookings?userId=${userId}&activityId=${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete favorite");
        }
      } else {
        // 添加收藏
        const response = await fetch(`https://localhost:7148/api/Bookings`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            UserID: userId,
            ActivityID: id,
            BookingDate: new Date().toISOString(),
            Price: product.price,
            BookingStatesID: 2, // 2: 收藏
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to add favorite");
        }
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Error updating favorite status:", error);
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

      <GridPic images={productImages} />

      <ProductDesc
        price={product.price}
        date={formattedDate}
        remaining={product.remaining}
        description={product.description}
      />

      <Reviews reviews={product.reviews} />

      {/* 显示前四张图片及其描述 */}
      {productImages.length > 0 && <ImageDescription images={productImages} />}

      <div className="product-footer">
        <button className="book-now-button">立即预订</button>
        <button className="add-to-cart-button">加入购物车</button>
        <div className="share-buttons">{/* 在这里放置分享按钮 */}</div>
      </div>
    </div>
  );
};

export default ProductPage;
