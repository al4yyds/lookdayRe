import React from 'react';
import './Filterbar.scss';

const FilterBar = () => {
    return (
        <div className="filter-bar">
            <FilterItem title="探索">
                <DropdownItem imgSrc="/src/assets/images/areas/taichung.jpg" label="台北" />
                <DropdownItem imgSrc="/src/assets/images/areas/taichung.jpg" label="台中" />
                <DropdownMenu items={['分類1', '分類2', '分類3']} />
                {/* 加入更多目的地 */}
            </FilterItem>
            <FilterItem title="全部分類">
                <DropdownMenu items={['分類1', '分類2', '分類3']} />
            </FilterItem>
            <FilterItem title="行程&體驗">
                <DropdownMenu items={['體驗1', '體驗2', '體驗3']} />
            </FilterItem>
            <FilterItem title="景點門票">
                <DropdownMenu items={['門票1', '門票2', '門票3']} />
            </FilterItem>
            <FilterItem title="飯店">
                <DropdownMenu items={['飯店1', '飯店2', '飯店3']} />
            </FilterItem>
            <FilterItem title="交通">
                <DropdownMenu items={['交通1', '交通2', '交通3']} />
            </FilterItem>
            <FilterItem title="美食品嚐">
                <DropdownMenu items={['美食1', '美食2', '美食3']} />
            </FilterItem>
            <FilterItem title="台灣高鐵">
                <DropdownMenu items={['高鐵1', '高鐵2', '高鐵3']} />
            </FilterItem>
        </div>
    );
};

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
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default FilterBar;
