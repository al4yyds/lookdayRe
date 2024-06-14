import React from 'react';
import './Filterbar.scss';

const FilterItem = ({ title, children }) => {
    return (
        <div className="filter-item">
            <button className="filter-button">{title}</button>
            <div className="dropdown">
                <div className="dropdown-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

const DropdownItem = ({ imgSrc, label }) => {
    return (
        <div className="location">
            <img src={imgSrc} alt={label} />
            <a href="#">{label}</a>
        </div>
    );
};

const DropdownMenu = ({ items }) => {
    return (
        <ul className="dropdown-menu">
            {items.map((item, index) => (
                <li key={index}>
                    {item.imgSrc && <img src={item.imgSrc} alt={item.label} style={{ width: '100px', height: '100px', marginRight: '10px' }} />}
                    {item.label}
                </li>
            ))}
        </ul>
    );
};

const FilterBar = () => {
    return (
        <div className="filter-bar">
            <FilterItem title="探索目的地">
                <DropdownMenu items={[
                    { imgSrc: "/src/assets/images/areas/taipei.jpg", label: "台北" },
                    { imgSrc: "/src/assets/images/areas/taichung.jpg", label: "台中" },
                    { imgSrc: "/src/assets/images/areas/hualien.jpg", label: "花蓮" },
                    { imgSrc: "/src/assets/images/areas/Taidon.jpg", label: "台東" },
                    { imgSrc: "/src/assets/images/areas/tainan.jpg", label: "台南" },
                    { imgSrc: "/src/assets/images/areas/yilan.jpg", label: "宜蘭" },
                    { imgSrc: "/src/assets/images/areas/yuling.jpg", label: "雲林" },
                ]} />
            </FilterItem>
            <FilterItem title="全部分類">
                <DropdownMenu items={[
                    { label: "分類1" },
                    { label: "分類2" },
                    { label: "分類3" }
                ]} />
            </FilterItem>
            <FilterItem title="行程&體驗">
                <DropdownMenu items={[
                    { label: "體驗1" },
                    { label: "體驗2" },
                    { label: "體驗3" }
                ]} />
            </FilterItem>
            <FilterItem title="景點門票">
                <DropdownMenu items={[
                    { label: "門票1" },
                    { label: "門票2" },
                    { label: "門票3" }
                ]} />
            </FilterItem>
            <FilterItem title="飯店">
                <DropdownMenu items={[
                    { label: "飯店1" },
                    { label: "飯店2" },
                    { label: "飯店3" }
                ]} />
            </FilterItem>
            <FilterItem title="交通">
                <DropdownMenu items={[
                    { label: "交通1" },
                    { label: "交通2" },
                    { label: "交通3" }
                ]} />
            </FilterItem>
            <FilterItem title="美食品嚐">
                <DropdownMenu items={[
                    { label: "美食1" },
                    { label: "美食2" },
                    { label: "美食3" }
                ]} />
            </FilterItem>
            <FilterItem title="台灣高鐵">
                <DropdownMenu items={[
                    { label: "高鐵1" },
                    { label: "高鐵2" },
                    { label: "高鐵3" }
                ]} />
            </FilterItem>
        </div>
    );
};

export default FilterBar;
