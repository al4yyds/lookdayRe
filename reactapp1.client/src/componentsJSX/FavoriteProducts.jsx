import './FavoriteProducts.scss';

const FavoriteProducts = () => {
  const products = [
    { id: 1, image: 'https://via.placeholder.com/300', title: '商品 1', price: 100 },
    { id: 2, image: 'https://via.placeholder.com/300', title: '商品 2', price: 200 },
    { id: 3, image: 'https://via.placeholder.com/300', title: '商品 3', price: 300 },
    { id: 4, image: 'https://via.placeholder.com/300', title: '商品 4', price: 400 },
    { id: 5, image: 'https://via.placeholder.com/300', title: '商品 5', price: 500 },
    { id: 6, image: 'https://via.placeholder.com/300', title: '商品 6', price: 600 },
  ];

  return (
    <div className="favorite-products">
      <header className="header">
        <h1>我的收藏</h1>
        <p>探索您最喜愛的商品，享受購物的樂趣</p>
      </header>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="product-info">
              <h2>{product.title}</h2>
              <p className="price">NT$ {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteProducts;
