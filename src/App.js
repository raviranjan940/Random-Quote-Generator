import React, { useState, useEffect } from 'react';
import QuoteCard from './components/QuoteCard';
import SavedQuotes from './components/SavedQuotes';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      const data = await response.json();
      setQuote(data[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Random Quote Generator</h1>
      <QuoteCard quote={quote} onSave={saveQuote} />
      <button
        style={{ ...styles.fetchButton, ...(isButtonHovered ? styles.fetchButtonHover : {}) }}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        onClick={fetchRandomQuote}
      >
        Get Another Quote
      </button>
      <SavedQuotes quotes={savedQuotes} />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#f5f7fa',
    minHeight: '100vh',
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },
  title: {
    fontSize: '36px',
    color: '#2c3e50',
    marginBottom: '30px',
    fontWeight: '300',
  },
  fetchButton: {
    marginTop: '20px',
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease, transform 0.2s ease-in-out',
  },
  fetchButtonHover: {
    backgroundColor: '#2980b9',
    transform: 'scale(1.02)',
  },
};

export default App;
