import { Link } from "react-router-dom";
import "./Titlebar.scss";
import logo from "../assets/Logo.png"; // 確保你有一個 logo.png 文件在對應的路徑

const Titlebar = () => {
  return (
    <div className="titlebar-container">
      <div className="titlebar">
        <div className="titlebar-left">
          <img src={logo} alt="Logo" className="logo" />
          <Link to="/" className="company-name">
            LOOKDAY
          </Link>
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
        <div className="titlebar-right">
          <Link to="/contact">
            <button className="titlebar-button">客服中心</button>
          </Link>
          <Link to="/cart">
            <button className="titlebar-button">購物車</button>
          </Link>
          <Link to="/wishlist">
            <button className="titlebar-button">收藏</button>
          </Link>
          <Link to="/register">
            <button className="titlebar-button">註冊</button>
          </Link>
          <Link to="/login">
            <button className="titlebar-button">登入</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Titlebar;
