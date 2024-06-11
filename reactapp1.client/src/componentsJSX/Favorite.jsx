import './Favorite.scss';

const Favorite = () => {
  const favoriteItems = [
    {
      id: 1,
      title: '商品 A',
      description: '這是商品 A 的描述',
      imageUrl: '/src/assets/images/favorites/item1.jpg',
    },
    {
      id: 2,
      title: '商品 B',
      description: '這是商品 B 的描述',
      imageUrl: '/src/assets/images/favorites/item2.jpg',
    },
    {
      id: 3,
      title: '商品 C',
      description: '這是商品 C 的描述',
      imageUrl: '/src/assets/images/favorites/item3.jpg',
    },
    // 你可以添加更多收藏项目
  ];

  return (
    <div className="favorite-page">
      <h1>我的收藏</h1>
      <div className="favorite-grid">
        {favoriteItems.map(item => (
          <div key={item.id} className="favorite-item">
            <img src={item.imageUrl} alt={item.title} className="favorite-image" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
