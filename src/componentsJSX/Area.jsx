import './Area.scss';
// import { useHistory } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';


const Area = () => {
const navigate = useNavigate();

  const areas = [
    { id: 1, name: '台北', imageUrl: '/src/assets/images/areas/taipei.jpg' },
    { id: 2, name: '台中', imageUrl: '/src/assets/images/areas/taichung.jpg' },
    { id: 3, name: '台南', imageUrl: '/src/assets/images/areas/tainan.jpg' },
    { id: 4, name: '高雄', imageUrl: '/src/assets/images/areas/kaohsiung.jpg' },
    { id: 5, name: '宜蘭', imageUrl: '/src/assets/images/areas/yilan.jpg' },
    { id: 6, name: '花蓮', imageUrl: '/src/assets/images/areas/hualien.jpg' },
  ];
  
const handleAreaClick = (areaName) => {
  // 使用傳入的 areaName 參數來導航
  console.log(areaName);
  navigate(`/search?query=${areaName}`);
  // console.log(pathname)
};

  return (
    <section className="area-section">
      <h2 className="area-title">旅遊地區</h2>
      <div className="area-cards-container">
        {areas.map(area => (
          <div key={area.id} className="area-card" onClick={() => handleAreaClick(area.name)}>
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
