import React from 'react';
import RefreshIcon from '../assets/desktop/icon-refresh.svg';
import styles from '../components/Quote.module.css';

const Quote = ({ quote, getQuoteHandler, toggleHide }) => {
  let hideQuote = toggleHide === true ? 'hide' : '';
  return (
    <section className={`${styles['quote-container']} ${hideQuote}`}>
      <div className={styles['quote']}>
        <p className="quote-txt">&ldquo;{quote.content}&rdquo;</p>
        <p className="author-txt">{quote.author}</p>
      </div>
      <div className={styles['refresh-btn-container']}>
        <button className={styles['refresh-btn']} onClick={getQuoteHandler}>
          <img src={RefreshIcon} alt="refresh quote"></img>
        </button>
      </div>
    </section>
  );
};

export default Quote;
