import React, { useState, useEffect } from 'react';
import './RandomQuoteMachine.css';

const RandomQuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchNewQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);

  return (
    <div className="container">
      <div id="quote-box">
        <div className="quote-content">
          <p id="text">{quote}</p>
          <p id="author">- {author}</p>
        </div>
        <div className="buttons">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote}" - ${author}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet Quote
          </a>
          <button id="new-quote" onClick={fetchNewQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomQuoteMachine;