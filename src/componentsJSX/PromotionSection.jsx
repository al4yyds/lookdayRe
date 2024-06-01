import "./PromotionSection.scss";
import promoImage1 from "../assets/images/promotion/promotion1.jpg";
import promoImage2 from "../assets/images/promotion/promotion2.jpg";
import promoImage3 from "../assets/images/promotion/promotion3.jpg";

const promotions = [
  {
    image: promoImage1,
    title: "活動1",
    description: "這是活動1的簡短描述。",
  },
  {
    image: promoImage2,
    title: "活動2",
    description: "這是活動2的簡短描述。",
  },
  {
    image: promoImage3,
    title: "活動3",
    description: "這是活動3的簡短描述。",
  },
];

const PromotionSection = () => {
  return (
    <section className="promotion-section">
      <h2 className="title">強檔活動</h2>
      <p className="subtitle">
        不要錯過我們最新的促銷活動，享受驚人的折扣和優惠！
      </p>

      <div className="cards-container">
        {promotions.map((promo, index) => (
          <div key={index} className="card">
            <img src={promo.image} alt={promo.title} className="image" />
            <h3 className="card-title">{promo.title}</h3>
            <p className="card-description">{promo.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromotionSection;
