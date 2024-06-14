import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">公司名稱</h2>
          <p>我們致力於提供最好的產品和服務。感謝您的支持與信賴。</p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-title">快速連結</h2>
          <ul>
            <li><a href="/about">關於我們</a></li>
            <li><a href="/privacy">隱私政策</a></li>
            <li><a href="/terms">使用條款</a></li>
            <li><a href="/faq">常見問題</a></li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h2 className="footer-title">訂閱我們</h2>
          <p>訂閱我們的電子報，獲取最新的促銷信息和更新。</p>
          <form className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="輸入您的電子郵件地址"
            />
            <button type="submit" className="newsletter-button">訂閱</button>
          </form>
        </div>
        <div className="footer-section social">
          <h2 className="footer-title">關注我們</h2>
          <div className="social-icons">
            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 公司名稱. 版權所有.</p>
      </div>
    </footer>
  );
}

export default Footer;
