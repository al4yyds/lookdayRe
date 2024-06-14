import './ContactSection.scss';
import backgroundImage from '../assets/images/contact/sectionBG.jpg';

const ContactSection = () => {
  return (
    <section className="contact-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="contact-content">
        <h2>需要什麼協助呢？</h2>
        <div className="contact-buttons">
          <div className="contact-button">
            <div className="button-content">
              <img src="/src/assets/images/icons/view-order.png" alt="查看訂單" />
              <span>查看訂單狀態</span>
            </div>
            <span className="button-arrow"></span>
          </div>
          <div className="contact-button">
            <div className="button-content">
              <img src="/src/assets/images/icons/edit-order.png" alt="修改訂單" />
              <span>修改訂單</span>
            </div>
            <span className="button-arrow"></span>
          </div>
          <div className="contact-button">
            <div className="button-content">
              <img src="/src/assets/images/icons/cancel-order.png" alt="取消訂單" />
              <span>取消訂單</span>
            </div>
            <span className="button-arrow"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
