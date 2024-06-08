import './Area.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Area = () => {
    const navigate = useNavigate();

    const areas = [
        { id: 1, name: '臺北', imageUrl: '/src/assets/images/areas/taipei.jpg' },
        { id: 2, name: '臺中', imageUrl: '/src/assets/images/areas/taichung.jpg' },
        { id: 3, name: '臺南', imageUrl: '/src/assets/images/areas/tainan.jpg' },
        { id: 4, name: '高雄', imageUrl: '/src/assets/images/areas/kaohsiung.jpg' },
        { id: 5, name: '宜蘭', imageUrl: '/src/assets/images/areas/yilan.jpg' },
        { id: 6, name: '花蓮', imageUrl: '/src/assets/images/areas/hualien.jpg' },
        { id: 7, name: '屏東', imageUrl: '/src/assets/images/areas/pingdon.jpg' },
        { id: 8, name: '雲林', imageUrl: '/src/assets/images/areas/yuling.jpg' },
        { id: 9, name: '台東', imageUrl: '/src/assets/images/areas/Taidon.jpg' },
    ];

    const handleImageClick = (areaName) => {
        navigate(`/search?query=${areaName}`);
    };

    // Use useEffect to scroll to the top whenever the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="area-section">
            <h2 className="area-title">旅遊地區</h2>
            <div className="area-cards-container">
                {areas.map(area => (
                    <div key={area.id} className="area-card" onClick={() => handleImageClick(area.name)}>
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
