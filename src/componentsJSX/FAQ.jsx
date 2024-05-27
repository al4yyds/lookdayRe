import { useState } from 'react';
import PropTypes from 'prop-types';
import './FAQ.scss';
import faqData from './FAQData';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
      <div className="faq-question">
        {question}
        <span className="faq-arrow">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
          >
            <path fill="#ff6f61" d="M7.41 8.41L12 13l4.59-4.59L18 9l-6 6-6-6z" />
          </svg>
        </span>
      </div>
      {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

const FAQ = () => {
  return (
    <section className="faq-section">
      <h2>熱門常見問題</h2>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </section>
  );
};

export default FAQ;
