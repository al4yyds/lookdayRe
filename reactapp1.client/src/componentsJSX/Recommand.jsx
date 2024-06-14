import React, { useState } from "react";
import "./Recommand.css";

// 假資料
const data = [
  {
    id: 1,
    bgColor: "#ffcc80", // 橘色
    icon: "📷", 
    title: "相機",
    desc: "這是一個相機的描述，描述其特點和優勢，讓使用者了解其功能。"
  },
  {
    id: 2,
    bgColor: "#ffab91", // 深橘色
    icon: "🥂",
    title: "乾杯",
    desc: "這是一個乾杯的描述，描述其特點和優勢，讓使用者了解其功能。"
  },
  {
    id: 3,
    bgColor: "#ff8a65", // 橙紅色
    icon: "🐉",
    title: "龍",
    desc: "這是一個龍的描述，描述其特點和優勢，讓使用者了解其功能。"
  },
  {
    id: 4,
    bgColor: "#ff7043", // 深橙色
    icon: "⚽",
    title: "足球",
    desc: "這是一個足球的描述，描述其特點和優勢，讓使用者了解其功能。"
  },
  {
    id: 5,
    bgColor: "#ffcc80", // 橘色
    icon: "🚁",
    title: "直升機",
    desc: "這是一個直升機的描述，描述其特點和優勢，讓使用者了解其功能。"
  }
];

const Recommand = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const next = () => activeSlide < data.length - 1 && setActiveSlide(activeSlide + 1);
  const prev = () => activeSlide > 0 && setActiveSlide(activeSlide - 1);

  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7
      };
  };

  return (
    <section className="recommand-section">
      <div className="recommand">
        <div className="slideC">
          {data.map((item, i) => (
            <React.Fragment key={item.id}>
              <div
                className="slide"
                style={{
                  background: item.bgColor,
                  ...getStyles(i)
                }}
              >
                <SliderContent {...item} />
              </div>
              <div
                className="reflection"
                style={{
                  background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                  ...getStyles(i)
                }}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="btns">
          <div className="btn" onClick={prev}>⬅️</div>
          <div className="btn" onClick={next}>➡️</div>
        </div>
      </div>
    </section>
  );
};

const SliderContent = (props) => {
  return (
    <div className="sliderContent">
      <div className="icon">{props.icon}</div>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
};

export default Recommand;
