import './Area.scss';

const Area = () => {
  const areas = [
    { id: 1, name: '臺北', imageUrl: '/src/assets/images/areas/taipei.jpg' },
    { id: 2, name: '臺中', imageUrl: '/src/assets/images/areas/taichung.jpg' },
    { id: 3, name: '臺南', imageUrl: '/src/assets/images/areas/tainan.jpg' },
    { id: 4, name: '高雄', imageUrl: '/src/assets/images/areas/kaohsiung.jpg' },
    { id: 5, name: '宜蘭', imageUrl: '/src/assets/images/areas/yilan.jpg' },
    { id: 6, name: '花蓮', imageUrl: '/src/assets/images/areas/hualien.jpg' },
  ];

  return (
    <section className="area-section">
      <h2 className="area-title">旅遊地區</h2>
      <div className="area-cards-container">
        {areas.map(area => (
          <div key={area.id} className="area-card">
            <img src={area.imageUrl} alt={area.name} className="area-image" />
            <div className="area-overlay">
              <div className="area-name">{area.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Area;
