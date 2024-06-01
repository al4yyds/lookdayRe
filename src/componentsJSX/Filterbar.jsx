import './Filterbar.scss';

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <div className="filter-item">
        <button className="filter-button">探索</button>
      </div>
      <div className="filter-item">
        <button className="filter-button">全部分類</button>
        <ul className="dropdown-menu">
          <li>分類1</li>
          <li>分類2</li>
          <li>分類3</li>
        </ul>
      </div>
      <div className="filter-item">
        <button className="filter-button">行程&體驗</button>
        <ul className="dropdown-menu">
          <li>體驗1</li>
          <li>體驗2</li>
          <li>體驗3</li>
        </ul>
      </div>
      <div className="filter-item">
        <button className="filter-button">景點門票</button>
        <ul className="dropdown-menu">
          <li>門票1</li>
          <li>門票2</li>
          <li>門票3</li>
        </ul>
      </div>
      <div className="filter-item">
        <button className="filter-button">飯店</button>
        <ul className="dropdown-menu">
          <li>飯店1</li>
          <li>飯店2</li>
          <li>飯店3</li>
        </ul>
      </div>
      <div className="filter-item">
        <button className="filter-button">交通</button>
        <ul className="dropdown-menu">
          <li>交通1</li>
          <li>交通2</li>
          <li>交通3</li>
        </ul>
      </div>
      <div className="filter-item">
        <button className="filter-button">美食品嚐</button>
        <ul className="dropdown-menu">
          <li>美食1</li>
          <li>美食2</li>
          <li>美食3</li>
        </ul>
      </div>
      <div className="filter-item">
        <button className="filter-button">台灣高鐵</button>
        <ul className="dropdown-menu">
          <li>高鐵1</li>
          <li>高鐵2</li>
          <li>高鐵3</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterBar;
