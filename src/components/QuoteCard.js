import React, { useState } from 'react';

const QuoteCard = ({ quote, onSave }) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div
      style={{ ...styles.card, ...(isCardHovered ? styles.cardHover : {}) }}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <p style={styles.quote}>"{quote}"</p>
      <button
        style={{ ...styles.button, ...(isButtonHovered ? styles.buttonHover : {}) }}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        onClick={onSave}
      >
        Save to List
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '24px',
    margin: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
  },
  quote: {
    fontSize: '20px',
    fontStyle: 'italic',
    color: '#333',
    marginBottom: '16px',
  },
  button: {
    padding: '10px 16px',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease, transform 0.2s ease-in-out',
  },
  cardHover: {
    transform: 'scale(1.02)',
  },
  buttonHover: {
    backgroundColor: '#45A049',
    transform: 'scale(1.05)',
  },
};

export default QuoteCard;
