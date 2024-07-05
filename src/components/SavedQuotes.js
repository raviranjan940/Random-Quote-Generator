import React, { useState } from 'react';

const SavedQuotes = ({ quotes }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Saved Quotes</h2>
      {quotes.map((quote, index) => (
        <div
          key={index}
          style={{ ...styles.savedQuote, ...(hoveredIndex === index ? styles.savedQuoteHover : {}) }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <p style={styles.quote}>"{quote}"</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    marginTop: '32px',
    padding: '20px',
    backgroundColor: '#d9e2ec',
    borderRadius: '12px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '16px',
    color: '#333',
    fontWeight: 'bold',
  },
  savedQuote: {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '20px',
    margin: '16px 0',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
  },
  savedQuoteHover: {
    transform: 'scale(1.02)',
  },
  quote: {
    fontSize: '18px',
    color: '#555',
    fontStyle: 'italic',
  },
};

export default SavedQuotes;
